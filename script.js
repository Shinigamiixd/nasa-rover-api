let container = document.querySelector(".container")


async function getRovers(){

    let links = [
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8",
        "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8",
        "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8"
    ]

    for (let l in links){

        let curiosity_rawdata = await fetch(links[l])
        let data = await curiosity_rawdata.json()
        rovers = data.photos
        let rover_container = document.createElement("div")

        let rover_name = rovers[0].rover.name
        let rover_cameras = rovers[0].camera.name
        let rover_status = rovers[0].rover.status
        let launch_date = rovers[0].rover.launch_date
        let landing_date = rovers[0].rover.landing_date
    
    
        let el_name = document.createElement("p")
        el_name.textContent = `Name - ${rover_name}`
        rover_container.appendChild(el_name)
    
        let el_cameras = document.createElement("p")
        el_cameras.textContent = `Cameras - ${rover_cameras}`
        rover_container.appendChild(el_cameras)
    
        let el_status = document.createElement("p")
        el_status.textContent = `Status - ${rover_status}`
        rover_container.appendChild(el_status)
    
        let el_launch_date = document.createElement("p")
        el_launch_date.textContent = `Launch Date - ${launch_date}`
        rover_container.appendChild(el_launch_date)
    
        let el_landing_date = document.createElement("p")
        el_landing_date.textContent = `Landing Date - ${landing_date}`
        rover_container.appendChild(el_landing_date)
    
        container.appendChild(rover_container)
    
        rover_images = document.createElement("div")
        rover_images.classList = "rover_images"

        for (let i = 0; i < 6; i++){
            let rover_image_container = document.createElement("div")
            rover_image_container.classList = "rover_image_container"
            
            let el_img = document.createElement("img")
            el_img.src = rovers[i].img_src
            el_img.classList = "el_img"
    
            rover_image_container.appendChild(el_img)
            rover_images.appendChild(rover_image_container)
            container.appendChild(rover_images)
        }
    }

}

getRovers()