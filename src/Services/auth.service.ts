import { supabase } from "../Lib/supabaseClient";

export const signUp = async (username: string, password: string, email: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) throw error

    // store username
    await supabase.from("TB_M_User").insert({
        ID: data.user?.id,
        UserName: username,
        Email: email
    });

    return { data };
};

export const signIn = async (
    identifier: string,
    password: string
) => {
    let email = identifier

    // if NOT email → find email by username
    if (!identifier.includes('@')) {
        const { data, error } = await supabase
            .from('TB_M_User')
            .select('Email')
            .eq('UserName', identifier)
            .single()
        if (error || !data) {
            throw error || new Error('User not found')
        }

        email = data.Email
    }
    await supabase.auth.signInWithPassword({
        email,
        password,
    })
    return { message: "Sign in successful" }
};

export const signOut = async () => {
    return await supabase.auth.signOut();
};

export const getCurrentUser = async () => {
    const { data:userData } = await supabase.auth.getUser()
    const userId = userData.user?.id

    const { data, error } = await supabase
        .from('TB_M_User')
        .select('UserName')
        .eq('ID', userId)
        .maybeSingle()

    if (error) throw error
    return data?.UserName ?? null
}
