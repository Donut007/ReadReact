import { supabase } from "../Lib/supabaseClient";

export const signUp = async (username: string, password: string, email: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) return { error };

    // store username
    await supabase.from("TB_M_User").insert({
        ID: data.user?.id,
        UserName: username,
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
            .select('ID')
            .eq('UserName', identifier)
            .single()

        if (error || !data) {
            return { error: { message: 'User not found' } }
        }

        // get email from auth.users
        const { data: userData } =
            await supabase.auth.admin.getUserById(data.ID)
            
        email = userData.user?.email ?? ''
    }

    return supabase.auth.signInWithPassword({
        email,
        password,
    })
};

export const signOut = async () => {
    return await supabase.auth.signOut();
};
