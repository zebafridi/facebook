let postInput=document.getElementById("postInput");
let mainDiv=document.getElementById("mainDiv");
let mainDiv2=document.getElementById("mainDiv2");
let createPostInput;
var likeBtn;

let focuseTextarea;


let createPostButton=document.getElementById("createPostButton")
let focuse;
postInput.addEventListener("click", function () {
    
    // let focuseDiv=document.getElementById("focuseDiv")
    focuse= document.createElement("div");
    focuse.setAttribute("id","focuse");
    document.body.appendChild(focuse);

    let popupCreatePost=document.createElement("h3");
    popupCreatePost.setAttribute("id","popupCreatePost")
    popupCreatePost.innerHTML="Create Post"
    focuse.appendChild(popupCreatePost)

    let focuseCross=document.createElement("span");
    focuseCross.setAttribute("id", "focuseCross")
    focuseCross.innerHTML="&#9747"
    focuse.appendChild(focuseCross)


    let focuseHr=document.createElement("hr");
    focuseHr.setAttribute("id", "focuseHr");
    focuse.appendChild(focuseHr);

    let focuseProfileDiv=document.createElement("div");
    focuseProfileDiv.setAttribute("id","focuseProfileDiv");
    focuse.appendChild(focuseProfileDiv);


//   section one image  //

let focuseProfileImage=document.createElement("img");
focuseProfileImage.setAttribute("id" ,"focuseProfileImage");
focuseProfileImage.src="k.jpg";

focuse.appendChild(focuseProfileImage);

// section one heading //
let focuseProfileName=document.createElement("h4");
focuseProfileName.setAttribute("id" ,"focuseProfileName")
focuseProfileName.innerHTML="Aurang Zeb";
focuse.appendChild(focuseProfileName);


    focuseTextarea=document.createElement("textarea");
    focuseTextarea.setAttribute("id", "focuseTextarea");
    focuseTextarea.placeholder="Whats in your Mind"
    focuse.appendChild(focuseTextarea);

    let createPostDiv=document.createElement("div");
    createPostDiv.setAttribute("id", "createPostDiv")
    focuse.appendChild(createPostDiv);

    let createPSubPostDiv=document.createElement("div")
    createPSubPostDiv.setAttribute("id", "createPSubPostDiv")
    createPostDiv.appendChild(createPSubPostDiv);

    

    let createPostP=document.createElement("p")
    createPostP.setAttribute("id", "createPostP")
    createPostP.innerHTML="Add your post"
    createPSubPostDiv.appendChild(createPostP)


    let createIconSubDiv=document.createElement("div")
    createIconSubDiv.setAttribute("id", "createIconSubDiv")
    createPostDiv.appendChild(createIconSubDiv);
    
    let createPostPhotoIcon=document.createElement("span");
    createPostPhotoIcon.setAttribute("id" , "createPostPhotoIcon")
    createPostPhotoIcon.innerHTML=`<i class="fa-regular fa-image"</i>`
    createIconSubDiv.appendChild(createPostPhotoIcon)

    createPostInput=document.createElement("input");
    createPostInput.setAttribute("id" , "createPostInput")
    createPostInput.type="file";
    createIconSubDiv.appendChild(createPostInput)

    let createPostTagIcon=document.createElement("span");
    createPostTagIcon.setAttribute("id" , "createPostTagIcon")
    createPostTagIcon.innerHTML=`<i class="fa-solid fa-user-tag"></i>`
    createIconSubDiv.appendChild(createPostTagIcon)

    

  

    let createPostFeelingIcon=document.createElement("span");
    createPostFeelingIcon.setAttribute("id" , "createPostFeelingIcon")
    createPostFeelingIcon.innerHTML=` <i class="fa-regular fa-face-smile"></i>`
    createIconSubDiv.appendChild(createPostFeelingIcon)


    let createPostLocationIcon=document.createElement("span");
    createPostLocationIcon.setAttribute("id" , "createPostLocationIcon")
    createPostLocationIcon.innerHTML=`<i class="fa-solid fa-location-dot"></i>`
    createIconSubDiv.appendChild(createPostLocationIcon)

   
    let createPostDotIcon=document.createElement("span");
    createPostDotIcon.setAttribute("id" , "createPostDotIcon")
    createPostDotIcon.innerHTML=`<i class="fa-solid fa-ellipsis"></i>`
    createIconSubDiv.appendChild(createPostDotIcon)


    // createPostButton=document.createElement("button");
    // createPostButton.setAttribute("id" , "createPostButton");
    // createPostButton.innerHTML="Post"
    focuse.appendChild(createPostButton)
    createPostButton.style.display="block"





    mainDiv.style.display="none"

    mainDiv2.style.display="none"
    




})











createPostButton.addEventListener("click" , function () {
// section one  //
let postingDiv=document.getElementById("postingDiv");
let section1=document.createElement("div");
section1.setAttribute("id","section1");
postingDiv.appendChild(section1);

// create div //
let imageDiv=document.createElement("div")
imageDiv.setAttribute("id" , "imageDiv")
section1.appendChild(imageDiv)

//   section one image  //
let image=document.createElement("img");
image.setAttribute("id" ,"image");
image.src="k.jpg";

imageDiv.appendChild(image);


let nameDiv=document.createElement("div")
nameDiv.setAttribute("id" , "nameDiv")
section1.appendChild(nameDiv)

// section one heading //
let name=document.createElement("h4");
name.setAttribute("id" ,"name")
name.innerHTML="Aurang Zeb";
nameDiv.appendChild(name);

// dots div //
let dotsDiv=document.createElement("div")
dotsDiv.setAttribute("id" , "dotsDiv")
section1.appendChild(dotsDiv)

// section one span  of dots icon//

let dots=document.createElement("span");
dots.setAttribute("id","dots");
dots.innerHTML=`<i class="fa-solid fa-ellipsis"></i>`;
dotsDiv.appendChild(dots);


// cross div //

let crossDiv=document.createElement("div")
crossDiv.setAttribute("id" , "crossDiv")
section1.appendChild(crossDiv)

// section one span  of cross icon//


let cross=document.createElement("span");
cross.setAttribute("id", "cross")
cross.innerHTML="&#9747"
crossDiv.appendChild(cross)

// section tow  //

let section2=document.createElement("div");
section2.setAttribute("id","section2")
postingDiv.appendChild(section2);
 
// section tow textarea first //
let textArea=document.createElement("p");
textArea.setAttribute("id", "textArea");
section2.appendChild(textArea);
textArea.innerHTML=focuseTextarea.value;


// section three //
let section3=document.createElement("div");
section3.setAttribute("id","section3");
postingDiv.appendChild(section3);

// section three image  //
let section3Image=document.createElement("img");
section3Image.setAttribute("id","section3Image");
section3Image.src=URL.createObjectURL(createPostInput.files[0]);
section3.appendChild(section3Image);



// sectio four //
let section4=document.createElement("div")
section4.setAttribute("id", "section4")
postingDiv.appendChild(section4)

// section four like para //
let like=document.createElement("p");
like.setAttribute("id","like");
like.innerHTML="0";
section4.appendChild(like);

// section four comments para //
let comments=document.createElement("p")
comments.setAttribute("id","comments");
comments.innerHTML="comments"
section4.appendChild(comments)


// hr tag  //
let hr=document.createElement("hr");
hr.setAttribute('id','hr');
postingDiv.appendChild(hr)


// section five //
let section5=document.createElement("div")
section5.setAttribute("id","section5")
postingDiv.appendChild(section5);


let likeDiv=document.createElement("div")
likeDiv.setAttribute("id","likeDiv");
section5.appendChild(likeDiv);

let likeSpan=document.createElement("span");
likeSpan.setAttribute("id","likeSpan");
likeSpan.innerHTML=`<i class="fa-regular fa-thumbs-up"></i>`;
likeDiv.appendChild(likeSpan);
likeBtn=document.createElement("button");
likeBtn.setAttribute("id","likeBtn");
likeBtn.innerHTML="like";
likeDiv.appendChild(likeBtn);



let commentsDiv=document.createElement("div")
commentsDiv.setAttribute("id","commentsDiv");
section5.appendChild(commentsDiv);

let commentsIcon=document.createElement("span");
commentsIcon.setAttribute("id","commentsIcon");
commentsIcon.innerHTML=`<i class="fa-regular fa-comment"></i>`;
commentsDiv.appendChild(commentsIcon);

let commentsBtn=document.createElement("button");
commentsBtn.setAttribute("id","commentsBtn");
commentsBtn.innerHTML="comments";
commentsDiv.appendChild(commentsBtn);




let shareDiv=document.createElement("div")
shareDiv.setAttribute("id","shareDiv");
section5.appendChild(shareDiv);

let shareIcon=document.createElement("span");
shareIcon.setAttribute("id","shareIcon");
shareIcon.innerHTML=`<i class="fa-solid fa-share"></i>`;
shareDiv.appendChild(shareIcon);

let shareBtn=document.createElement("button");
shareBtn.setAttribute("id","shareBtn");
shareBtn.innerHTML="share";
shareDiv.appendChild(shareBtn);


mainDiv.style.display="block" 

mainDiv2.style.display="block"

focuse.style.display="none"


let totalLike;
let num=0;

let totalComents;
let num1=0;



likeBtn.addEventListener("click" ,function(){
 
    totalLike = ++num;
    like.innerHTML= totalLike;
    // console.log(totalLike)


    
})

commentsBtn.addEventListener("click" ,function(){
 
    totalComents= ++num1;
    comments.innerHTML= totalComents;
    // console.log(totalLike)


    
})

    
})




