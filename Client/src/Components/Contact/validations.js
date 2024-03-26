const validations=({name,email,affair,message})=>{
const errors={}
if(!name||name.length===0){
    errors.e1="El nombre es obligatorio."
}else if(!/^[A-Z]+$/i.test(name)){
    errors.e1="El nombre debe contener solo letras."
}
if(!email||email.length===0){
    errors.e2="El Email es obligatorio."
}else if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
    errors.e2="El email debe ser valido."
}
if(!affair||affair.length===0){
    errors.e3="El asunto es obligatorio."
}else if(affair.length>25){
    errors.e3="El asunto puede tener hasta 25 caracteres."
}
if(!message||message.length===0){
    errors.e4="El mensaje es obligatorio."
}else if(message.length<10){
    errors.e4="El mensaje debe tener minimo 10 caracteres."
}
return errors
}

export default(validations)