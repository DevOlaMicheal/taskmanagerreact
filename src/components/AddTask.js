import { useState } from 'react'
import swal from 'sweetalert'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text || !day) {
            swal({
                title: "Error!",
                text: "Fill out every field!",
                icon: "error",
              });
            return
        }

        onAdd({ text, day, reminder })
        swal({
            title: "Success!",
            text: "Task successfully Added!",
            icon: "success",
          });
        setText('')
        setDay('')
        setReminder(false)
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day and Time'  value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminders</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>


            <input type="submit" value='Save Task' className="btn btn-block" />
        </form>
    )
}

export default AddTask