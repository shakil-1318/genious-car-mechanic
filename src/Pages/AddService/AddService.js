import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('succesfully adddeddd');
                    reset();
                }
            })
    }
    return (
        <div>
            <h1>Please add services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='name' />
                <textarea {...register("description")} placeholder='description' />
                <input type="number" {...register("price")} placeholder='price' />
                <input {...register("img")} placeholder='img' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;