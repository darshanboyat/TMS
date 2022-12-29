import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box } from '@mui/material'


function index({ role }) {
    return (
        <div>
            {
                role === 'admin' && <Box className="operation-handels">
                    <Link to='/perform/add-members'>
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldHdvcmslMjBtYXJrZXRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60" alt="" />
                        <Typography variant='h6' className="operation-heading">Add Members</Typography>
                    </Link>
                    <Link to="/perform/add-task">
                        <img src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <Typography variant='h6' className="operation-heading">Add Task</Typography>
                    </Link>
                    <Link to="/create/project">
                        <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600" className="last-operation-img" alt="" />
                        <Typography variant='h6' className="operation-heading">Create New Project</Typography>
                    </Link>
                </Box>
            }
            {
                role === 'task-manager' && <Box className="operation-handels">
                    <Link to='/perform/add-members'>
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldHdvcmslMjBtYXJrZXRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60" alt="" />
                        <Typography variant='h6' className="operation-heading">Add Members</Typography>
                    </Link>
                    <Link to="/perform/add-task">
                        <img src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <Typography variant='h6' className="operation-heading">Add Task</Typography>
                    </Link>
                </Box>
            }
            {
                role === 'employee' && <Box className="operation-handels">
                    <Link to='/view-task'>
                        <img src="https://media.istockphoto.com/id/1199291049/photo/group-of-people-writing-on-sticky-notes.jpg?b=1&s=170667a&w=0&k=20&c=BiuHH-ZTsi5_YHHvR4-o6KfmWl7add7ABG5IV6VLhJI=" alt="" />
                        <Typography variant='h6' className="operation-heading">View Tasks</Typography>
                    </Link>
                </Box>
            }
        </div>
    )
}

export default index