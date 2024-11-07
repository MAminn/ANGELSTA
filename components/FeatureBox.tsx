'use client
import { motion } from "framer-motion";
import React from "react";

const FeatureBox = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className='flex flex-col items-center p-6 space-y-4 text-center bg-white rounded-lg shadow-lg'>
    <h3 className='text-xl font-semibold text-[#0a1622]'>{title}</h3>
    <p className='text-gray-600'>{description}</p>
  </motion.div>
);

export default FeatureBox;
