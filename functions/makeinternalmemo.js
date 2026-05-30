export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    
    const link = data.LINK;

    console.log("Received document link:", link);

    return new Response(
      JSON.stringify({
        success: true,
        received: link
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: err.toString()
      }),
      {
        headers: {
          "Content-Type": "application/json"
        },
        status: 500
      }
    );
  }
}
