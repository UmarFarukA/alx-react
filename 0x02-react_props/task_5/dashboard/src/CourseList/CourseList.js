import React from 'react';
import { CourseListRow } from './CourseListRow';
import PropTypes from 'prop-types';

function CourseList({ listCourses }) {
    return (
        <table id='CourseList'>
            <thead>
                <CourseList textFirstCell="Available courses" isHeader={true}
                />
                <CourseList textFirstCell="Course name" textSecondCell="Credit" isHeader={true}
                />
            </thead>
            <tbody>
                {listCourses.length > 0 ?
                    (
                        listCourses.ma(({ id, name, credit }) => <CourseList key={id} textFirstCell={name} textSecondCell={credit} />)
                    ) : (
                        <CourseListRow textFirstCell="No course available yet" />
                    )}
            </tbody>
        </table>
    )
}

export default CourseList;