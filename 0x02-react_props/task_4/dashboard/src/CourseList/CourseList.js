import React from 'react';
import { CourseListRow } from './CourseListRow';

function CourseList() {
    return (
        <table id='CourseList'>
            <thead>
                <CourseList textFirstCell="Available courses" isHeader={true}
                />
                <CourseList textFirstCell="Course name" textSecondCell="Credit" isHeader={true}
                />
            </thead>
            <tbody>
                <CourseList textFirstCell="ES6" textSecondCell="60" isHeader={false} />
                <CourseList textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
                <CourseList textFirstCell="React" textSecondCell="40" isHeader={false} />
            </tbody>
        </table>
    )
}

export default CourseList;