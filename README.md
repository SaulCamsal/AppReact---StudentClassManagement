# AppReact---StudentClassManagement

1. Introduction
  1.1 Purpose
  The purpose of this document is to describe the functional and non-functional  
  requirements for the development of a student, class, payment, and subscription
  management application.
  1.2 Scope
  The application will allow administrators to manage information about students,
  classes, subscriptions, and payments. Students will be able to access a personalized
  page to check information about their classes, outstanding balance, and payments
  made.
  2. Functional Requirements
    2.1 Student Management
      1. The application must allow the creation, modification, and deletion of
      students.
  2. Each student must have the following attributes:
    ● Identification (ID)
    ● Name
    ● Last Name
    ● UUID (to identify their personal page)
  2.2 Class Management
    1. The application must allow the creation, modification, and deletion of classes.
    2. Each class must have the following attributes:
      ● Identification (ID)
      ● Name
  2.3 Subscription Management
    1. The application must allow administrators to enroll students in existing
    classes.
    2. Each subscription must have the following attributes:
      ● Student ID
      ● Class ID
      ● Subscription amount
      ● Monthly payment day
      ● Subscription status (active or inactive)
  2.4 Payment Management
    1. The application must allow administrators to record student payments.
    2. The system must automatically calculate the amount to be paid depending on
      the classes the student is subscribed to.
    3. Payments must be associated with the corresponding student.
    3. Non-Functional Requirements
  3.1 Usability
    1. The user interface must be intuitive and easy to use for both administrators
    and students.
    2. The application must be compatible with mobile and desktop devices.
  3.2 Security
    1. Access to student information must be restricted to authorized users.
    2. Security measures must be implemented to protect sensitive student and
    payment data.
    3. A login screen needs to be present to control the access for admin users.
  3.3 Performance
    1. The application must be able to handle a large volume of data without
    experiencing significant response delays.
    2. Page loading times must be minimal.
  3.4 Maintenance
    1. The system must be easily maintainable to allow for future updates and
    improvements.
    2. Detailed documentation must be provided to facilitate system administration
    and maintenance.
4. External Interface Requirements
   There are no specified external interface requirements in this document.
5. User Requirements
 1. Administrators will be able to access student, class, subscription, and    
  payment management functions.
  2. Students will be able to access a personalized page to check information
  about their classes, outstanding balance, and payments made, the URL should
  be based on the user’s UUID, such that there is no need for authentication.
6. Constraints
  1. The application must be developed using modern web technologies (React).
  2. The application must comply with applicable data protection and privacy
  laws.
7. Assumptions and Dependencies
  1. It is assumed that users will have access to devices with an Internet
  connection to use the application.
  2. The availability and performance of the system may depend on the hosting
  infrastructure used.
  This document outlines the main requirements for the development of the student
  and class management application. Additional details regarding design and
  implementation will be specified in additional documents during the development
  process.
