import React from "react"
import Card from "./Card"

function App() {
  let data = [
    {
      title:"Lion",
      image:"https://imgs.search.brave.com/HwDtqQJueKXgNwy_aLDKwPhEXRwZ8Ujq-FCnlSQdMDM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/OTI1Mzk3MC9waG90/by9wb3J0cmFpdC1v/Zi1hLWxpb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW1L/TjA1YzhJamhfbWZF/REIyNDFoLVViS184/d3FjeUtOb2x0a0kw/WUxRd289",
      description:"Lion, (Panthera leo), large, powerfully built cat (family Felidae) that is second in size only to the tiger; it is a famous apex predator (meaning without a natural predator or enemy). The proverbial “king of beasts,” the lion has been one of the best-known wild animals since earliest times. Lions are most active at night and live in a variety of habitats but prefer grassland, savanna, dense scrub, and open woodland. Historically, they ranged across much of Europe, Asia, and Africa, but now they are found mainly in parts of Africa south of the Sahara. An isolated population of about between 500 and 700 wild Asiatic lions constitute a slightly smaller population that lives under strict protection in Indias Gir National Park and Wildlife Sanctuary."
    },
    {
      title:"Tiger",
      image:"https://imgs.search.brave.com/dWWKoOsKYp9TWS8EQjAf37_naov3KHElfMk4xkgDZZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzEwLzU0LzU5/LzM2MF9GXzIxMDU0/NTk0Nl9IOEswQ0pp/aDlUb1JNcWJCY3pn/cjJCTFdKWWNyTmIx/Vi5qcGc",
      description:"Tiger, (Panthera tigris), largest member of the cat family (Felidae), rivaled only by the lion (Panthera leo) in strength and ferocity; it is a famous apex predator (meaning without a natural predator or enemy). The tiger is endangered throughout its range, which stretches from the Russian Far East through parts of North Korea, China, India, and Southeast Asia to the Indonesian island of Sumatra. The Siberian, or Amur, tiger (P. tigris altaica) is the largest, measuring up to 4 metres (13 feet) in total length and weighing up to 300 kg (660 pounds)."
    },
    {
      title:"Wolf",
      image:"https://t4.ftcdn.net/jpg/00/99/11/23/240_F_99112303_yrcK41wTnj3YmfCSFXd9rxrlsojHUMfI.jpg",
      description:"Wolf, any of two species of wild doglike carnivores. The gray, or timber, wolf (Canis lupus) is the better known. It is the largest nondomestic member of the dog family (Canidae) and inhabits vast areas of the Northern Hemisphere. The Ethiopian, or Abyssinian, wolf (C. simensis) inhabits the highlands of Ethiopia; until recently it was considered a jackal."
    }
  ]
  return <>
  <div className="container">

{/* <!-- Page Heading --> */}
<h1 className="my-4">Animal Planet
</h1>

<div className="row">
  {
    data.map((e,i) => {
      return <Card data={e} key={i}/>
    })
  }
</div>
</div>
</>
}

export default App
