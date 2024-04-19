import React from "react";
import Style from './InputBox.module.scss'
import { useState } from "react"
// import { useForm, SubmitHandler } from 'react-hook-form'

// type FormValues = {
//     newtask: string
// }
const InputBox: React.FC = () => {

    const [isInputFocused, setInputFocused] = useState(false)
    const handleInputFocus = () => {
        setInputFocused(true)

    }
    const handleInputBlur = () => {
        setInputFocused(false)
    }

    // const { register, reset, handleSubmit, formState } = useForm<FormValues>({
    // })
    // const onSubmit: SubmitHandler<FormValues> = (data) => {
    //     console.log('Task added:', data);
    //     reset({
    //         newtask: ''
    //     })
    // }
    // const { errors } = formState

    return (
        <React.Fragment>
            {/* <form onSubmit={handleSubmit(onSubmit)} noValidate className={Style['action']}> */}
            <div className={Style['action']}>
                <div className={Style['input-wrapper']}>
                    <label className={Style[isInputFocused ? 'label' : 'hidden']}>New Task</label>
                    <input
                        type="text"
                        // {...register('newtask', {
                        //     required: {
                        //         value: true,
                        //         message: 'Task name is required',
                        //     },
                            // validate: {
                            //     wrongInput: (fieldValue) => {
                            //         return (
                            //             fieldValue !== 'No task' ||
                            //             'Task name is not valid'
                            //         )
                            //     }
                            // }
                        // })}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        placeholder="New Task"
                    />
                    {/* <p className={Style['error']}>error</p> */}
                </div>

            </div>
                {/* <button className={Style['button']}><img className={Style['icon']} src={IconAdd} alt="add icon" /> Add new</button> */}
        </React.Fragment>)
}
export default InputBox