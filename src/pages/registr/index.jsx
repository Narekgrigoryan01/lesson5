import './style.css'



const Registr = () => {
    return <div className='P-registr-block'>
        <div className='P-registr-box'>
            <label>
                <input name={'FrstName'} type="text" placeholder='email' />
            </label>
            <label>
                <input name={'LastName'} type="text" placeholder={'LastName'} />
            </label>
            <label>
                <input name={'email'} type="text" placeholder='email' />
            </label>
            <label>
                <input name={'Password'} type="password" placeholder='Password' />
            </label>
        </div>
    </div>

}



export default Registr