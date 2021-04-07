import axios from 'axios';
import React, { useState } from 'react';
import { set, useForm } from "react-hook-form";
import './AddBook.css'

const AddBook = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null);
    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            price: data.price,
            imgUrl: imgUrl
        }
        console.log(bookData);
    }
    

    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'cf51017bd5120601f73b9b13098c1644');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then( function (response){
            const imgLiveUrl = response.data.data.display_url;
            setImgUrl(imgLiveUrl);
        })
        .catch(err => console.log(err))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="bookName">Add Book</label>
            <br/>
            <input name='bookName' type='text' placeholder='Enter Name' {...register("bookName")} />
            <br/>
            <label htmlFor="authorName">Add Author</label>
            <br/>
            <input name='authorName' type='text' placeholder='Enter Name' {...register("authorName")} />
            <br/>
            <label htmlFor="price">Add Price</label>
            <br/>
            <input name='price' type="number" placeholder='Enter Price' {...register("price")} />
            <br/>
            <input name='uploadedImage' type='file' onChange={handleImageUpload} />
            <br/>
            <input type="submit" />
        </form>
    );
};

export default AddBook;