function FacebookLike() {
  return (
    <iframe
      src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FGenieClim-France-61551065537391%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}`}
      width="340"
      height="130"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allow="encrypted-media"
    />
  );
}

export default FacebookLike;
