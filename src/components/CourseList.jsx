// import { shallow } from "zustand/shallow"
import { useState } from "react"
import { useCourseStore } from "../store/store"
import IncompleteCourses from "./IncompleteCourses"
import CompleteCourses from "./CompleteCourses"

const CourseList = () => {
	const courses = useCourseStore((state) => state.courses)
	const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus)
	const removeCourse = useCourseStore((state) => state.removeCourse)

	return (
		<div className='courses'>
			{courses.length === 0 ? (
				<h3 style={{ fontWeight: "normal" }}>No Courses Added Yet</h3>
			) : (
				<div className='courses-table'>
					<IncompleteCourses />
					<CompleteCourses />
				</div>
			)}
		</div>
	)
}

export default CourseList
