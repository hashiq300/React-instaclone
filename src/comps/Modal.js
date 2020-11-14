import React from 'react';
import { motion } from 'framer-motion';

const Modal= ({selectedImage, setSelectedImage})=>{
  const clickHandler= (e)=>{
    if (e.target.classList.contains('backdrop')){
      setSelectedImage(null);
    }
  }
  
  return (
    <motion.div class="backdrop" onClick={clickHandler} initial={{ opacity:0 }} animate={{ opacity:1 }}>
      <img src={selectedImage} alt="enlarged pic"/>
    </motion.div>
    )
  
}

export default Modal