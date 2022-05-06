import { getAuth, getRedirectResult, signOut, TwitterAuthProvider } from 'firebase/auth'

export const login = async (supabase) => {
  const auth = getAuth()
  const result = await getRedirectResult(auth)

  if (result) {
    const credential = TwitterAuthProvider.credentialFromResult(result)

    const token = credential.accessToken
    const secret = credential.secret

    const user = result.user

    console.log(user)

    const email = user.email
    const password = user.uid

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error?.message === 'User already registered') {
      await supabase.auth.signIn({
        email,
        password,
      })
    } else if (error) console.error(error)

    await supabase
      .from('users')
      .update({
        twitter_handle: user.reloadUserInfo.screenName,
        access_token: token,
        access_secret: secret,
      })
      .eq('id', supabase.auth.user().id)

    signOut(auth)
  }
}
