import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.supabaseUrl
const supabaseAnonKey = process.env.supabaseAnonKey

export default (_, inject) => {
  inject('supabase', createClient(supabaseUrl, supabaseAnonKey))
}
