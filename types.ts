import React from 'react';

export interface Leader {
  name: string;
  title: string;
  role: string;
  image: string;
}

export interface Institution {
  name: string;
  description: string;
  image: string;
  logo?: string;
  link?: string;
}

export interface CourseCategory {
  id: string;
  title: string;
  courses: string[];
}

export interface StatItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}