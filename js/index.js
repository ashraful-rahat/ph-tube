const categoryData = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data =await response.json();
  
    // const allCategories = data.categories;
    data.categories.forEach((item) => {
      
    const categories =document.getElementById('categories') 
    const button = document.createElement("div")
   button.innerHTML=`

   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">${item.category}</button>
   
   
   `
    // button.innerText= ;

     
    categories.appendChild(button);

    });

}

categoryData();

const loadVideos = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data =await response.json()
   const allVideos = data.videos; 
   console.log(data);
     const videoContainer =   document.getElementById('videos');
   allVideos.forEach((item)=>{
   const card = document.createElement("div");
   card.classList ="card card-compact  ";
      
   card.innerHTML =`<figure class="h-[200px] relative" >
    <img  class="h-full w-full  object-cover"
      src=${item.thumbnail}
    
      alt="Shoes" />
         ${item.others.posted_date?.length ==0?"":`<span class="absolute right-2 bottom-2 text-white rou  p-1">${item.others.posted_date}</span>`}

  </figure>
  <div class="px-0 py-2 flex gap-2">
     <div>
    <img src="${item.authors[0].profile_picture}" class="w-10 h-10 rounded-full object-cover">
</div>
<div>
    <h2 class="font-bold">${item.title}</h2>
    

<div class="flex  items-center gap-2">

    <p class="text-gray-400">${item.authors[0].profile_name}</p>
    ${item.authors[0].verified==true?`<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">`:''}
</div>

<div>
    <p></p>
</div>



`
 videoContainer.appendChild(card);
 

   })




};

loadVideos();