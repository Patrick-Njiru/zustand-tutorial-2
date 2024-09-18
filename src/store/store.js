import { create } from "zustand"
// look into these properties
import { devtools, persist } from "zustand/middleware"

const courseStore = (set) => ({
	courses: [],
	// recommended: separate actions from state
	actions: {
		addCourse: (course) => set((state) => ({ courses: [...state.courses, course] })),
		removeCourse: (courseId) =>
			set((state) => ({ courses: state.courses.filter((course) => course.id !== courseId) })),
		toggleCourseStatus: (courseId) =>
			set((state) => ({
				courses: state.courses.map((course) =>
					course.id === courseId ? { ...course, completed: !course.completed } : course
				),
			})),
	},
})

export const useCourseStore = create(
	// storing in local storage
	devtools(
		persist(courseStore, {
			name: "courses",
		})
	)
)
