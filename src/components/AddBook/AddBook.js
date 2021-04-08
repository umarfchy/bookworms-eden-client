import axios from 'axios';
import React, { useState } from 'react';
import { set, useForm } from "react-hook-form";
import './AddBook.css'

const AddBook = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null);
    
    //actions on submitting the form
    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            price: data.price,
            imgUrl: imgUrl
        }

        //sending book info to the backend server
        const databaseUrl = `https://blueberry-tart-01004.herokuapp.com/addBook`
        fetch(databaseUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(bookData)
        })
        .then(res => res.json())
        .then(resData => console.log('Following book info is added to the server : ', resData.ops[0]))
        .catch(err => console.log(err))
    }
    

    const handleImageUpload = event =>{
        const imageData = new FormData();
        imageData.set('key', 'cf51017bd5120601f73b9b13098c1644');
        imageData.append('image', event.target.files[0])

        // sending img data to server and getting live url
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then( function (response){
            const imgLiveUrl = response.data.data.display_url;
            setImgUrl(imgLiveUrl);
        })
        .catch(err => console.log(err))
    }
    return (
        //adds book to db on submit
        <div >
        <h3>Add Book</h3>
        <form className='formShowcase' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="bookName">Book Name
            {/* <br/> */}
            <input name='bookName' type='text' placeholder='Enter Name' {...register("bookName")} /></label>
            {/* <br/> */}
            <label htmlFor="authorName">Author Name
            {/* <br/> */}
            <input name='authorName' type='text' placeholder='Enter Name' {...register("authorName")} /></label>
            {/* <br/> */}
            <label htmlFor="price">Add Price
            {/* <br/> */}
            <input name='price' type="number" placeholder='Enter Price' {...register("price")} /></label>
            {/* <br/> */}
            <label htmlFor="uploadImage">Add Book Cover Photo
            {/* <br/> */}
            <input name='uploadedImage' type='file' onChange={handleImageUpload} /></label>
            {/* <br/> */}
            <input className='addProductSubmitBtn' type="submit" />
        </form>
        </div>
    );
};

export default AddBook;