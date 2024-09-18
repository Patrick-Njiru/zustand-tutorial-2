import { useState } from "react"
import { useCourseStore } from "../store/store"
// using uuid (universal unique identifier) to generate unique ids for each new course
import { v4 as id } from "uuid"

const CourseForm = () => {
	const [courseTitle, setCourseTitle] = useState("")
	const addCourse = useCourseStore((state) => state.addCourse)
	console.log("form rendered")

	const handleCourseSubmit = (e) => {
		e.preventDefault()
		if (!courseTitle) return alert("Please enter a course title")
		addCourse({ id: id(), name: courseTitle })
		setCourseTitle("")
	}
	return (
		<div className='form-container'>
			<input
				type='text'
				value={courseTitle}
				onChange={(e) => setCourseTitle(e.target.value)}
				className='form-input'
			/>
			<button type='submit' className='form-submit-btn' onClick={handleCourseSubmit}>
				Add Course
			</button>
		</div>
	)
}

export default CourseForm
