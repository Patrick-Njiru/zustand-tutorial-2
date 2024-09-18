// import { shallow } from "zustand/shallow"
import { useCourseStore } from "../store/store"
import { useShallow } from "zustand/shallow"

const CompleteCourses = () => {
	const { courses, toggleCourseStatus, removeCourse } = useCourseStore(
		useShallow((state) => ({
			courses: state.courses,
			toggleCourseStatus: state.actions.toggleCourseStatus,
			removeCourse: state.actions.removeCourse,
		}))
	)

	return (
		<div className='courses'>
			<h3>Completed Courses</h3>
			{courses.length === 0 ? (
				<h3 style={{ fontWeight: "normal" }}>No Complete Courses</h3>
			) : (
				courses
					.filter((course) => course.completed)
					.map((course, index) => (
						<article
							key={course.id}
							style={{ borderBottom: "1px dotted black", paddingBottom: "10px" }}
						>
							<h2>
								{index + 1}. {course.name}
							</h2>
							<div>
								<button
									onClick={() => removeCourse(course.id)}
									style={{
										backgroundColor: "red",
										color: "#fff",
										borderRadius: "50%",
										height: "40px",
										width: "40px",
										marginRight: "30px",
									}}
								>
									X
								</button>
								<input
									type='checkbox'
									checked={course.completed}
									style={{ marginLeft: "15px", border: "1px solid red" }}
									onChange={() => toggleCourseStatus(course.id)}
								/>
							</div>
						</article>
					))
			)}
		</div>
	)
}

export default CompleteCourses
