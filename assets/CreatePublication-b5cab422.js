import{C as f,a as e,j as m,u as p,b as h}from"./index-876158a7.js";import{r as n,u as x,L as b}from"./vendor-a99cd8e2.js";function j(){const{user:o,userName:s}=n.useContext(f),c=x(),[l,r]=n.useState(null),[i,d]=n.useState(""),u="https://firebasestorage.googleapis.com/v0/b/red-social-42886.appspot.com/o/publications%2FTweet%20_%20Twitter.jfif?alt=media&token=cdf20af1-19c7-47ac-a145-8f8736d6030f";return e("section",{className:"bg-[#dfdff1] w-full min-h-screen flex items-center justify-center",children:m("form",{onSubmit:t=>{t.preventDefault();try{h({description:i,img:l,name:o.displayName||s,avatar:o.photoURL||u}),c("/CafecitBook/home")}catch(a){console.log(a),alert("Hubo un error al momento de publicar")}},className:"bg-[#5154cf] p-4 w-[450px] flex flex-col gap-2 max-[470px]:w-[90%] overflow-hidden rounded-md",children:[e("h3",{className:"text-center text-white text-[20px]",children:"Crea tu Publicación :)"}),e("div",{children:e("textarea",{onChange:t=>{d(t.target.value)},className:"text-[14px] w-full bg-[#dfdff1] h-[100px] p-2 outline-none",placeholder:"Escribe una descripción",type:"text"})}),e("picture",{className:"border w-full h-[200px] border-dotted flex items-center justify-center",children:l===null?e("h6",{className:"text-[13px] text-white",children:"Elija una imagen de su dispositivo"}):e("img",{className:"w-full h-full object-cover",src:l})}),e("div",{children:e("input",{onChange:async t=>{r(null);try{const a=await p(t.target.files[0]);r(a)}catch(a){console.log(a)}},className:"text-[14px]",type:"file"})}),e(()=>l===null?e("button",{disabled:!0,className:"bg-[#8282d8] py-1 rounded-md text-[#5154cf]",children:"Publicar"}):e("button",{className:"bg-[#dfdff1] py-1 rounded-md text-[#5154cf]",children:"Publicar"}),{}),e(b,{className:"w-full",to:"/CafecitBook/home",children:e("button",{className:"bg-[#dfdff1] w-full py-1 rounded-md text-[#5154cf]",children:"Volver"})})]})})}export{j as default};
