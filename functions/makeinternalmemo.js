export async function onRequestPost(context) {

    try {

        const data = await context.request.json();
        const link = data.LINK;

        console.log("Memo link received:", link);

        return new Response(JSON.stringify({
            success: true,
            LINK: link
        }), {
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (err) {

        return new Response(JSON.stringify({
            success: false,
            error: err.toString()
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
