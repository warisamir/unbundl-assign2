function Navbar(){
    return (`
    <a href="./index.html"
        ><img
          src="https://cococart.in/cdn/shop/files/Logo-CocoCart-01_256x256_53567f30-96ba-4e37-b419-8c4c413a0e0a_200x.webp?v=1660115022"
          alt="logo"
      /></a>
      <div id="bagIcon">
        <a href="./collectionPage.html"
          ><i class="fa-solid fa-bag-shopping"></i
        ></a>
        <h3 id="collectionCount"></h3>
      </div>`)
}

export default Navbar