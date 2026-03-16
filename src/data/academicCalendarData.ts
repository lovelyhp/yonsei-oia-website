export interface CalendarEntry {
  month: string;
  date: string;
  checklist: string;
  notes?: string[];
}

export interface SemesterCalendar {
  semester: string;
  data: CalendarEntry[];
}

export const ACADEMIC_CALENDAR_DATA: SemesterCalendar[] = [
  {
    semester: "2026 Spring Semester",
    data: [
      // February
      {
        month: "February",
        date: "8 (Sun)",
        checklist: "Deadline for Program Withdrawal with 100% Tuition Refund (visiting students only)"
      },
      {
        month: "February",
        date: "9 (Mon) - 13 (Fri)",
        checklist: "Online Course Registration period (Korean Standard Time)"
      },
      {
        month: "February",
        date: "22 (Sun)",
        checklist: "Dormitory Check-In",
        notes: [
          "SK Global House & International House",
          "skghouse@yonsei.ac.kr",
          "https://dorm.yonsei.ac.kr/HOME/"
        ]
      },
      {
        month: "February",
        date: "26 (Thur)",
        checklist: "Spring Semester New Student Offline Orientation"
      },

      // March
      {
        month: "March",
        date: "2 (Mon)",
        checklist: "Substitute Holiday for Independence Movement Day (Public Holiday)"
      },
      {
        month: "March",
        date: "3 (Tue)",
        checklist: "Spring Semester Begins"
      },
      {
        month: "March",
        date: "5 (Thur) - 9 (Mon)",
        checklist: "Course Add & Drop Period (first-come, first-serve basis)",
        notes: [
          "8:00 AM - 5:00 PM",
          "Early log-in possible from 7:00 AM; wish-list creation available prior to registration at 8:00 AM",
          "AFTER THE ADD & DROP PERIOD, YOU CANNOT REGISTER FOR ADDITIONAL COURSES WHATSOEVER"
        ]
      },
      {
        month: "March",
        date: "9 (Mon)",
        checklist: "Deadline for Program Withdrawal with 80% tuition refund (visiting students only)"
      },

      // April
      {
        month: "April",
        date: "14 (Tue) - 16 (Thur)",
        checklist: "Course Final Withdrawal Period",
        notes: [
          "No further changes can be made to your course list after the final withdrawal period",
          "The course withdrawal period is your last chance to drop from your course",
          "When a student withdraws from a course, he/she cannot add a new course for that vacant spot",
          "The minimum course load of nine (9) credits must be maintained even after a course withdrawal has been made for the student to remain enrolled in our SAY program",
          "Withdrawn courses will not appear on the transcript"
        ]
      },
      {
        month: "April",
        date: "16 (Thur)",
        checklist: "Deadline for Program Withdrawal with 50% Tuition Refund (visiting students only): After this period, no tuition refunds will be made"
      },
      {
        month: "April",
        date: "21 (Tue) - 27 (Mon)",
        checklist: "Midterm Exam Period"
      },

      // May
      {
        month: "May",
        date: "1 (Fri) ~ 8 (Fri)",
        checklist: "Program Extension Application Period (For students who applied for 1 semester only)"
      },
      {
        month: "May",
        date: "5 (Tue)",
        checklist: "Children's Day (Public Holiday)"
      },
      {
        month: "May",
        date: "25 (Mon)",
        checklist: "Substitute Holiday for Buddha's Birthday Day (Public Holiday)"
      },

      // June
      {
        month: "June",
        date: "3 (Wed)",
        checklist: "The Local Election Day (Public Holiday)"
      },
      {
        month: "June",
        date: "6 (Sat)",
        checklist: "Memorial Day (Public Holiday)"
      },
      {
        month: "June",
        date: "9 (Tue) - 22 (Mon)",
        checklist: "Reading Week and Final Exam Period"
      },
      {
        month: "June",
        date: "22 (Mon)",
        checklist: "Last Day of Spring Semester"
      },
      {
        month: "June",
        date: "22 (Mon)",
        checklist: "Dorm Check-out",
        notes: [
          "For more details, contact the SK Global House and International House offices (skghouse@yonsei.ac.kr)"
        ]
      },
      {
        month: "June",
        date: "TBA",
        checklist: "Course Evaluation Period",
        notes: [
          "Students can view their final grades only if they have completed the final course survey without missing out on any of the survey questions",
          "Please use Internet Explorer / Microsoft Edge. Other browsers such as Firefox, Chrome may cause problems displaying the Course Evaluation page"
        ]
      },
      {
        month: "June",
        date: "TBA",
        checklist: "Final Online Grade Checking Period",
        notes: [
          "Students must have completed their online evaluation in advance, or students will not be able to view their grades through the system",
          "Official transcript is expected to be available from July 9 (Wed) 3PM KST (subject to change)"
        ]
      },

      // July
      {
        month: "July",
        date: "From July 9 (Wed) 3PM KST",
        checklist: "Official Transcript available",
        notes: [
          "You can issue and print your official transcript for FREE from the Yonsei Portal",
          "Login: portal.yonsei.ac.kr → Academic Information System → Grades → Exchange Student Grades → Print"
        ]
      }
    ]
  },
  {
    semester: "2025 Fall Semester",
    data: [
      // August
      {
        month: "August",
        date: "10 (Sun)",
        checklist: "Deadline for Program Withdrawal with 100% Tuition Refund (visiting students only)"
      },
      {
        month: "August",
        date: "11 (Mon) - 18 (Mon)",
        checklist: "Online Course Registration period (Korean Standard Time)"
      },
      {
        month: "August",
        date: "23 (Sat)",
        checklist: "Dormitory Check-In",
        notes: [
          "SK Global House & International House",
          "skghouse@yonsei.ac.kr",
          "https://dorm.yonsei.ac.kr/HOME/"
        ]
      },
      {
        month: "August",
        date: "26 (Tue)",
        checklist: "Fall Semester New Student Offline Orientation"
      },

      // September
      {
        month: "September",
        date: "1 (Mon)",
        checklist: "Fall Semester Begins"
      },
      {
        month: "September",
        date: "3 (Wed) - 5 (Fri)",
        checklist: "Course Add & Drop Period (first-come, first-served basis)",
        notes: [
          "8:00 AM - 5:00 PM",
          "Early log-in possible from 7:00 AM; wish-list creation available prior to registration at 8:00 AM",
          "AFTER THE ADD & DROP PERIOD, YOU CANNOT REGISTER FOR ADDITIONAL COURSES WHATSOEVER"
        ]
      },
      {
        month: "September",
        date: "5 (Fri)",
        checklist: "Deadline for Program Withdrawal with 80% tuition refund (visiting students only)"
      },

      // October
      {
        month: "October",
        date: "3 (Fri)",
        checklist: "National Foundation Day (Public Holiday)"
      },
      {
        month: "October",
        date: "5 (Sun) - 7 (Tue)",
        checklist: "Chuseok (Korean Thanksgiving) Holiday (Public Holiday)"
      },
      {
        month: "October",
        date: "8 (Wed) - 9 (Thur)",
        checklist: "Hangul Day (Public Holiday)"
      },
      {
        month: "October",
        date: "13 (Mon) - 15 (Wed)",
        checklist: "Course Final Withdrawal Period",
        notes: [
          "No further changes can be made to your course list after the final withdrawal period",
          "The course withdrawal period is your last chance to drop from your course",
          "When a student withdraws from a course, he/she cannot add a new course for that vacant spot",
          "The minimum course load of nine (9) credits must be maintained even after a course withdrawal has been made for the student to remain enrolled in our SAY program",
          "Withdrawn courses will not appear on the transcript"
        ]
      },
      {
        month: "October",
        date: "15 (Wed)",
        checklist: "Deadline for Program Withdrawal with 50% Tuition Refund (visiting students only): After this period, no tuition refunds will be made"
      },
      {
        month: "October",
        date: "20 (Mon) - 25 (Sat)",
        checklist: "Midterm Exam Period"
      },

      // November
      {
        month: "November",
        date: "1 (Sat) - 8 (Sat)",
        checklist: "Program Extension Application Period (For students who applied for 1 semester only)"
      },
      {
        month: "November",
        date: "Dec. 22 (Mon) - 2026. 1. 4 (Sun)",
        checklist: "Course Evaluation Period",
        notes: [
          "Students can view their final grades only if they have completed the final course survey without missing out on any of the survey questions",
          "Please use Internet Explorer / Microsoft Edge. Other browsers such as Firefox, Chrome may cause problems displaying the Course Evaluation page"
        ]
      },

      // December
      {
        month: "December",
        date: "15 (Mon) - 20 (Sat)",
        checklist: "Final Exam Period"
      },
      {
        month: "December",
        date: "20 (Sat)",
        checklist: "Last Day of Fall Semester"
      },
      {
        month: "December",
        date: "21 (Sun)",
        checklist: "Dorm Check-out",
        notes: [
          "For more details, contact the SK Global House and International House offices (skghouse@yonsei.ac.kr)"
        ]
      },
      {
        month: "December",
        date: "25 (Thur)",
        checklist: "Christmas (Public Holiday)"
      },
      {
        month: "December",
        date: "Dec. 29 (Mon) - 2026. 1. 5 (Mon) 5:00 PM",
        checklist: "Final Online Grade Checking Period",
        notes: [
          "Students must have completed their online evaluations in advance, or they will not be able to view their grades through the system",
          "Official transcript is expected to be issued starting from 2026. 1. 6 (Tue) 3:00 PM"
        ]
      },

      // January 2026
      {
        month: "January 2026",
        date: "From 2026. 1. 6 (Tue) 3:00 PM",
        checklist: "Official Transcript available (subject to change)",
        notes: [
          "You can issue and print your official transcript for FREE from the Yonsei Portal",
          "Login: portal.yonsei.ac.kr → Academic Information System → Grades → Exchange Student Grades → Print"
        ]
      }
    ]
  }
];
