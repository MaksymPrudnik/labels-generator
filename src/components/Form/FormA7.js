import React from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';

const FormA7 = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    if (errors) {
        console.log(errors);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-section'>
            <fieldset className='form-fieldset from-set'>
                <legend>FROM:</legend>
                <input type="text" name="f2_1" ref={register({required: true})} placeholder="Underleverantör AB"/>
                <input type="text" name="f2_2" ref={register({required: true})} placeholder="c/o Le verantör AB"/>
                <input type="text" name="f2_3" ref={register({required: true})} placeholder="SE"/>
                <input type="number" name="f2_4" ref={register({required: true})} placeholder="65112"/>
                <input type="text" name="f2_5" ref={register({required: true})} placeholder="KARLSTAD"/>
                <input type="tel" name="f2_7" ref={register({required: true})} placeholder="054-12 34 56"/>
                <input type="number" name="f3_1" ref={register({required: true, maxLength: 15})} placeholder="Order number"/>
            </fieldset>
            <fieldset className='form-fieldset fin-dest-set'>
                <legend>Final Destination:</legend>
                <input type="text" name="f5_1" ref={register({required: true})} placeholder="Underentreprenör" />
                <input type="text" name="f5_2" ref={register({required: true})} placeholder="c/o Entreprenör" />
                <input type="text" name="f5_3" ref={register({required: true})} placeholder="Kv Överstinnan" />
                <input type="text" name="f5_4" ref={register({required: true})} placeholder="Regementsgatan 91" />
                <input type="text" name="f5_5" ref={register({required: true})} placeholder="SE" />
                <input type="number" name="f5_6" ref={register({required: true, maxLength: 10})} placeholder="72345" />
                <input type="text" name="f5_7" ref={register({required: true})} placeholder="SKUMMESLÖVSSTRAND" />
                <input type="number" name="f6_1" ref={register({required: true, maxLength: 15})} placeholder="Project Number" />
            </fieldset>
            <fieldset className='form-fieldset package-set'>
                <legend>Package Info:</legend>
                <input type="date" name="f7_1" ref={register({required: true})} placeholder="Deliver before"/>
                <input type="text" name="f8_1" ref={register({required: true})} placeholder="Storing temperature min/max" />
                <input type="text" name="f9_1" ref={register({required: true, maxLength: 10})} placeholder="Weight" />
                <input type="text"  name="f10_1" ref={register({required: true})} placeholder="Package type"/>
            </fieldset>
            <fieldset className='form-fieldset delivery-set'>
                <legend>Delivery info:</legend>
                <div>
                    <input type="text" name="f12" defaultValue='Unloading place' ref={register({required: true})}/>
                    <input type="text"  name="f12_1" ref={register({required: true, maxLength: 4})} placeholder="B"/>
                    <input type="text" name="f13" defaultValue='Building' ref={register({required: true, maxLength: 20})}/>
                    <input type="text"  name="f13_1" ref={register({required: true, maxLength: 4})} placeholder="D"/>
                    <input type="text" name="f14" defaultValue='Stairs' ref={register({required: true, maxLength: 20})}/>
                    <input type="text"  name="f14_1" ref={register({required: true, maxLength: 4})} placeholder="1"/>
                    <input type="text" name="f15" defaultValue='Floor' ref={register({required: true, maxLength: 20})}/>
                    <input type="text"  name="f15_1" ref={register({required: true, maxLength: 4})} placeholder="2"/>
                    <input type="text" name="f16" defaultValue='Appartment' ref={register({required: true, maxLength: 20})}/>
                    <input type="text"  name="f16_1" ref={register({required: true, maxLength: 6})} placeholder="1103"/>
                    <input type="text" name="f17" defaultValue='Room' ref={register({required: true, maxLength: 20})}/>
                    <input type="text"  name="f17_1" ref={register({required: true, maxLength: 4})} placeholder="456"/>
                    <input type="text" name="f18" defaultValue='Position' ref={register({required: true, maxLength: 20})}/>
                    <input type="text"  name="f18_1" ref={register({required: true, maxLength: 4})} placeholder="789"/>
                </div>
            </fieldset>
            <fieldset className='form-fieldset codes-set'>
                <legend>Codes info:</legend>
                <label htmlFor="f20_2">Package ID:
                    <input type="number" id='f20_2'  name="f20_2" ref={register({required: true})} placeholder="123456789012345678"/>
                </label>
                <label htmlFor="f21_3">FINAL DESTIONATION:
                    <input type="text" id='f21_3' name="f21_3" ref={register({required: true})} placeholder="GEO: 59.61227, 16.57438"/>
                </label>
                <label htmlFor="f22_3">PHONE NUMBER:
                    <input type="text" id='f22_3' name="f22_3" ref={register({required: true})} placeholder="+46701234567"/>    
                </label>
            </fieldset>            

            <input type="submit" className='form-submit-button'/>
        </form>
    )
}

export default FormA7;