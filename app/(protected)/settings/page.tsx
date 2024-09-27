import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {

    const session = await auth();

    session?.user.id 

    return (
        <div>
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";

                await signOut();
            }}> 
            <Button variant="outline" size="lg" type="submit">
                SignOut
            </Button>
            </form>
        </div>
    )
}

export default SettingsPage;