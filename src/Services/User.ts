import { supabase } from "../Lib/supabaseClient"
import type { TB_M_User } from "../Models/TB_M_User"

export const getUser = async (): Promise<TB_M_User[]> => {
  const { data, error } = await supabase
    .from("TB_M_User")
    .select("*")

  if (error) throw error
  return data as TB_M_User[]
}

export const getUsers = async (): Promise<TB_M_User[]> => {
  const { data, error } = await supabase
    .from("TB_M_User")
    .select("*")

  if (error) throw error
  return data as TB_M_User[]
}