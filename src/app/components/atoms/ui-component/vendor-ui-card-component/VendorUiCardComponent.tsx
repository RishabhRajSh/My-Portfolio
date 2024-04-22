import React from "react";
import Style from './VendorUiCardComponent.module.scss'
import Avatar from '../../../../../assets/icon/IconLogo.svg'
import ImgVendorTask from '../../../../../assets/vendor-assets/images/analyze-data.svg'
import IconAdd from '../../../../../assets/vendor-assets/icon/icon_add.svg'
import { useState } from "react"
import { useForm, SubmitHandler } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import CustomButton from "./custom-components/CutomButton";

type FormValues = {
    newtask: string
    date: Date
}
const VendorUiCardComponent: React.FC = () => {
    const currentTime = new Date()
    const [isInputFocused, setInputFocused] = useState(false)
    const handleInputFocus = () => {
        setInputFocused(true)
    }
    const handleInputBlur = () => {
        setInputFocused(false)
    }
    const { control, register, reset, handleSubmit, formState } = useForm<FormValues>({
    })
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log('Task added:', data, currentTime)
        reset({
            newtask: ''
        })
    }
    const { errors } = formState

    return (
        <React.Fragment>
            <div className={Style['container']}>
                <div className={Style['header']}>
                    <img className={Style['avatar']} src={Avatar} alt="Avatar" />
                    <div className={Style['header-wrapper']}>
                        <h3 className={Style['title']}>Let's Begin</h3>
                        <p className={Style['sub-title']}>Assign tasks for today</p>
                    </div>
                </div>
                <div className={Style['image']}>
                    <img src={ImgVendorTask} alt="Vendor Task" />
                </div>
                <div className={Style['content']}>
                    <h3 className={Style['heading']}>Create a new task</h3>
                    <p className={Style['subheading']}>Start organizing your workflow.</p>
                    <p className={Style['text']}>Create the tasks, for yourself or for your team, and keep track of the progress.</p>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className={Style['action']}>
                        <div className={Style['input-wrapper']}>
                            <label className={Style[isInputFocused ? 'label' : 'hidden']}>New Task</label>
                            <input
                                type="text"
                                {...register('newtask', {
                                    required: {
                                        value: true,
                                        message: 'Task name is required',
                                    },
                                    validate: {
                                        wrongInput: (fieldValue) => {
                                            return (
                                                fieldValue !== 'No task' ||
                                                'Task name is not valid'
                                            )
                                        }
                                    }
                                })}
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                placeholder="New Task"
                            />
                            <p className={Style['error']}>{errors.newtask?.message}</p>
                        </div>
                        {/* <button className={Style['button']}><img className={Style['icon']} src={IconAdd} alt="add icon" /> Add new</button> */}
                        <CustomButton
                            color="#007bff"
                            icon={IconAdd}
                            text="Add new"
                            onClickColor="#F78F14"
                        />
                    </form>
                    <DevTool control={control} />
                </div>
            </div>
        </React.Fragment>
    )
}
export default VendorUiCardComponent