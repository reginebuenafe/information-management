function Services() {
    return (
      <>

      
        <div className="center-title">
            <h2 className="title">SERVICES</h2>
        </div>
            
        <div className="background-container">
            {/* Customization */}
            <div className="left">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, impedit.
                    Obcaecati ullam repudiandae quae earum veniam deserunt, ad corrupti
                    nostrum dolorem animi. Omnis, mollitia. Obcaecati laudantium quas
                    dignissimos. A, asperiores.
                </p>
    
                <div className="customizations-container">
                    <div className="first-cust">

                        <form action="">
                        <p>Customization 1?</p>
                        <input type="checkbox" id="fcustom1" value="fcust1" name="customization" />
                        <label for="fcustom1">Lorem Ipsum 1</label><br />
            
                        <input type="checkbox" id="fcustom2" value="fcust2" name="customization" />
                        <label for="fcustom2">Lorem Ipsum 2</label><br />
            
                        <input type="checkbox" id="fcustom3" value="fcust3" name="customization" />
                        <label for="fcustom3">Lorem Ipsum 3</label><br />
            
                        <input type="checkbox" id="fcustom4" value="fcust4" name="customization" />
                        <label for="fcustom4">Lorem Ipsum 4</label><br />
                        </form>

                    </div>
                    
                    <div className="second-cust">

                        <form action="">
                        <p>Customization 2?</p>
                        <input type="checkbox" id="scustom1" value="scust1" name="customization" />
                        <label for="scustom1">Lorem Ipsum 1</label><br />
            
                        <input type="checkbox" id="scustom2" value="scust2" name="customization" />
                        <label for="scustom2">Lorem Ipsum 2</label><br />
            
                        <input type="checkbox" id="scustom3" value="scust3" name="customization" />
                        <label for="scustom3">Lorem Ipsum 3</label><br />
            
                        <input type="checkbox" id="scustom4" value="scust4" name="customization" />
                        <label for="scustom4">Lorem Ipsum 4</label><br />
                        </form>

                    </div>
                    
                </div>
            </div>
    
            {/* Right */}
            <div className="right">
            <div>
                <img src="src\assets\pexels-ksenia-chernaya-6617286.jpg" className="imgs" />
            </div>
            <div className="prod-title">
                <p>Service Name</p>
                <button className="btn">Buy</button>
            </div>

            </div>

        </div>
      </>
    );
  }
  
  export default Services;
  