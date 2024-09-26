import Image from 'next/image';
import icon1 from "@/public/images/icon-analytics.png";
import icon2 from "@/public/images/icon-ratings.png";
import icon3 from "@/public/images/icon-research.png";
import React from 'react'

const SectionSummary = () => {
  return (
    <section className='relative px-8 py-12 bg-slate-200'>
      <div className='absolute inset-x-0 w-8 mx-auto -top-4'>
        <svg
          className='mx-auto'
          width='24'
          height='30'
          viewBox='0 0 24 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M23.185 15.025L12.135 21.4L1 15.025'
            stroke='#212B36'
            stroke-width='1.52957'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'></path>
          <path
            opacity='0.3'
            d='M1 15.025L12.05 8.65002L23.185 15.025'
            stroke='#212B36'
            stroke-width='1.52957'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'></path>
          <path
            d='M23.185 15.025L12.05 1L1 15.025'
            stroke='#212B36'
            stroke-width='1.52957'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'></path>
          <path
            d='M12.1351 21.4L12.05 1'
            stroke='#212B36'
            stroke-width='1.52957'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'></path>
          <path
            d='M1 15.025L12.135 28.88L23.185 15.025'
            stroke='#212B36'
            stroke-width='1.52957'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'></path>
        </svg>
      </div>

      {/* <!-- basic summary --> */}
      <div id='summaryEntry' className='max-w-5xl pb-12 mx-auto summary-entry'>
        {/* <!-- abstract --> */}
        <div className='mx-auto lg:max-w-3xl'>
          <svg
            className='w-full h-full'
            width='835px'
            height='243px'
            viewBox='0 0 835 243'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <linearGradient
                x1='-71511.5%'
                y1='-63.6950904%'
                x2='-71511.5%'
                y2='-63.6950904%'
                id='linearGradient-8a9ttb_9pp-1'>
                <stop stop-color='#CAF6E1' offset='0%'></stop>
                <stop
                  stop-color='#CAF6E1'
                  stop-opacity='0.9558'
                  offset='4.41565%'></stop>
                <stop
                  stop-color='#CAF6E1'
                  stop-opacity='0'
                  offset='100%'></stop>
              </linearGradient>
              <linearGradient
                x1='-13269.5%'
                y1='-111.556064%'
                x2='-13269.5%'
                y2='-111.556064%'
                id='linearGradient-8a9ttb_9pp-2'>
                <stop stop-color='#CAF6E1' offset='0%'></stop>
                <stop
                  stop-color='#CAF6E1'
                  stop-opacity='0.9558'
                  offset='4.41565%'></stop>
                <stop
                  stop-color='#CAF6E1'
                  stop-opacity='0'
                  offset='100%'></stop>
              </linearGradient>
              <linearGradient
                x1='0.0260385844%'
                y1='50.0236115%'
                x2='99.9550243%'
                y2='50.0236115%'
                id='linearGradient-8a9ttb_9pp-3'>
                <stop stop-color='#CAF6E1' offset='0.0020668%'></stop>
                <stop stop-color='#B3E7CE' offset='16.94%'></stop>
                <stop stop-color='#76C09D' offset='52.63%'></stop>
                <stop stop-color='#1E8755' offset='100%'></stop>
              </linearGradient>
              <linearGradient
                x1='103.463258%'
                y1='50.0108075%'
                x2='-3.44895405%'
                y2='50.0108075%'
                id='linearGradient-8a9ttb_9pp-4'>
                <stop
                  stop-color='#919EAB'
                  stop-opacity='0'
                  offset='0.529101%'></stop>
                <stop stop-color='#919EAB' offset='100%'></stop>
              </linearGradient>
              <linearGradient
                x1='102.963245%'
                y1='50.0633078%'
                x2='-2.88105928%'
                y2='50.0633078%'
                id='linearGradient-8a9ttb_9pp-5'>
                <stop
                  stop-color='#919EAB'
                  stop-opacity='0'
                  offset='0.529101%'></stop>
                <stop stop-color='#919EAB' offset='100%'></stop>
              </linearGradient>
              <linearGradient
                x1='102.30968%'
                y1='49.9614784%'
                x2='-2.34332753%'
                y2='49.9614784%'
                id='linearGradient-8a9ttb_9pp-6'>
                <stop
                  stop-color='#919EAB'
                  stop-opacity='0'
                  offset='0.529101%'></stop>
                <stop stop-color='#919EAB' offset='100%'></stop>
              </linearGradient>
              <linearGradient
                x1='-2.79232861%'
                y1='49.9467492%'
                x2='102.684986%'
                y2='49.9467492%'
                id='linearGradient-8a9ttb_9pp-7'>
                <stop
                  stop-color='#919EAB'
                  stop-opacity='0'
                  offset='0.529101%'></stop>
                <stop stop-color='#919EAB' offset='100%'></stop>
              </linearGradient>
              <linearGradient
                x1='49.15%'
                y1='-3.81256231%'
                x2='49.15%'
                y2='103.812562%'
                id='linearGradient-8a9ttb_9pp-8'>
                <stop
                  stop-color='#919EAB'
                  stop-opacity='0'
                  offset='0.529101%'></stop>
                <stop stop-color='#919EAB' offset='100%'></stop>
              </linearGradient>
              <linearGradient
                x1='47.45%'
                y1='-4.41083181%'
                x2='47.45%'
                y2='104.410601%'
                id='linearGradient-8a9ttb_9pp-9'>
                <stop
                  stop-color='#919EAB'
                  stop-opacity='0'
                  offset='0.529101%'></stop>
                <stop stop-color='#919EAB' offset='100%'></stop>
              </linearGradient>
            </defs>
            <g
              id='Page-1'
              stroke='none'
              stroke-width='1'
              fill='none'
              fill-rule='evenodd'>
              <g id='kc-abstract' transform='translate(2.000000, 1.000000)'>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='540.59999 144.245 498.86499 120.105 540.34499 96.22 582.07999 120.275'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='582.33499 168.3 540.59999 144.16 582.07999 120.275 623.81499 144.33'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.3'
                  points='624.06999 192.355 582.33499 168.3 623.81499 144.33 665.46499 168.385'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='665.63499 216.41 623.89999 192.27 665.37999 168.385 707.11499 192.44'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='582.07999 120.275 540.34499 96.22 581.82499 72.25 623.55999 96.305'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='623.81499 144.33 582.07999 120.275 623.55999 96.305 665.20999 120.36'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='665.46499 168.385 623.81499 144.33 665.20999 120.36 706.94499 144.5'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='748.84999 216.495 707.11499 192.44 748.59499 168.47 790.32999 192.61'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='623.55999 96.305 581.82499 72.25 623.30499 48.28 665.03999 72.42'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='748.42499 120.275 706.68999 96.22 748.16999 72.25 789.90499 96.305'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='665.20999 120.36 623.55999 96.305 664.95499 72.3351 706.68999 96.475'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='706.94499 144.5 665.20999 120.36 706.68999 96.475 748.42499 120.53'></polygon>
                <polyline
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.05'
                  points='789.73499 96.135 831.46999 120.19 790.07499 144.16 748.33999 120.02'></polyline>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='706.34999 49.81 664.61499 25.755 706.09499 1.785 747.82999 25.925'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.05'
                  points='499.20499 168.13 457.46999 144.075 498.86499 120.105 540.59999 144.245'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.3'
                  points='540.85499 192.185 499.11999 168.13 540.59999 144.16 582.33499 168.3'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='582.58999 216.325 540.85499 192.185 582.33499 168.3 624.06999 192.355'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='624.15499 240.295 582.41999 216.24 623.89999 192.27 665.63499 216.41'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.05'
                  points='457.72499 192.1 415.98999 167.96 457.46999 144.075 499.20499 168.13'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='499.37499 216.155 457.63999 192.1 499.11999 168.13 540.85499 192.185'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='124.43999 143.14 82.78999 119.085 124.18499 95.115 165.91999 119.255'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.3'
                  points='166.17499 167.28 124.43999 143.14 165.91999 119.17 207.65499 143.31'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='291.20999 239.445 249.47499 215.39 290.95499 191.42 332.68999 215.475'></polygon>
                <polyline
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.3'
                  points='249.38999 215.305 207.65499 191.165 249.13499 167.28 290.78499 191.335'></polyline>
                <polyline
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.3'
                  points='207.65499 143.31 249.13499 119.34 290.78499 143.48 249.38999 167.365'></polyline>
                <polyline
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='290.69999 143.395 332.43499 167.45 290.95499 191.42'></polyline>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='332.68999 215.475 290.95499 191.42 332.43499 167.45 374.16999 191.59'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='207.39999 95.285 165.66499 71.23 207.14499 47.26 248.87999 71.315'></polygon>
                <polyline
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.15'
                  points='248.79499 71.3151 290.52999 95.455 249.13499 119.34'></polyline>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.15'
                  points='332.43499 167.45 290.69999 143.395 332.17999 119.425 373.91499 143.565'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='374.16999 191.59 332.43499 167.45 373.91499 143.565 415.64999 167.62'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='41.73499 190.91 -2.13162821e-14 166.77 41.47999 142.885 83.21499 166.94'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='124.69499 191.165 82.95999 167.11 124.43999 143.14 166.17499 167.28'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.3'
                  points='166.42999 215.305 124.69499 191.165 166.17499 167.28 207.90999 191.335'></polygon>
                <polyline
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='249.47499 215.39 207.99499 239.275 166.34499 215.22 207.73999 191.25'></polyline>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='124.94999 239.19 83.21499 215.135 124.69499 191.165 166.42999 215.305'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='457.72499 95.88 415.98999 71.74 457.46999 47.855 499.20499 71.91'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='499.45999 119.935 457.72499 95.88 499.20499 71.91 540.93999 96.05'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='540.93999 96.05 499.20499 71.9099 540.68499 47.9399 582.41999 72.0799'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='582.41999 72.0801 540.68499 47.9401 582.16499 24.0551 623.89999 48.1101'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.05'
                  points='457.97999 143.905 416.24499 119.765 457.72499 95.88 499.45999 119.935'></polygon>
                <polyline
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='208.07999 47.515 249.55999 23.545 291.29499 47.6 249.81499 71.57'></polyline>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='374.50999 48.025 332.77499 23.97 374.25499 0 415.98999 24.14'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='83.21499 72.3351 41.47999 48.1951 82.95999 24.3101 124.69499 48.3651'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='333.19999 119.68 291.46499 95.625 332.94499 71.655 374.67999 95.795'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.05'
                  points='416.49999 167.79 374.84999 143.735 416.24499 119.765 457.97999 143.905'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.05'
                  points='374.16999 239.955 332.43499 215.9 373.91499 191.93 415.64999 216.07'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.2'
                  points='415.64999 216.07 373.91499 191.93 415.39499 167.96 457.12999 192.1'></polygon>
                <polygon
                  id='Path'
                  stroke='#D0BEFE'
                  stroke-width='1.52957'
                  opacity='0.1'
                  points='457.38499 240.125 415.64999 215.985 457.04499 192.1 498.77999 216.155'></polygon>
                <path
                  d='M575.36499,117.045 L545.27499,99.705 C543.91499,98.94 543.06499,97.835 542.80999,96.73 C542.38499,94.86 542.72499,73.1851 542.72499,73.1851 L621.17999,73.1851 C621.17999,73.1851 621.17999,92.31 621.09499,95.03 C621.51999,96.9 620.32999,98.94 617.60999,100.47 L589.89999,116.45 C585.64999,119 579.10499,119.255 575.36499,117.045 Z'
                  id='Path'
                  fill='#919EAB'
                  fill-rule='nonzero'></path>
                <path
                  d='M575.36499,117.045 L545.27499,99.705 C543.91499,98.94 543.06499,97.835 542.80999,96.73 C542.38499,94.86 542.72499,73.1851 542.72499,73.1851 L621.17999,73.1851 C621.17999,73.1851 621.17999,92.31 621.09499,95.03 C621.51999,96.9 620.32999,98.94 617.60999,100.47 L589.89999,116.45 C585.64999,119 579.10499,119.255 575.36499,117.045 Z'
                  id='Path'
                  fill='#DFE3E8'
                  fill-rule='nonzero'></path>
                <path
                  d='M622.11499,83.045 C622.53999,84.915 621.26499,87.04 618.54499,88.655 L590.06999,105.06 C585.64999,107.61 579.01999,107.865 575.19499,105.655 L544.33999,87.805 C542.89499,86.955 542.04499,85.935 541.87499,84.83'
                  id='Path'
                  stroke='#FFFFFF'
                  stroke-width='1.56851'></path>
                <path
                  d='M575.36499,94.435 L545.27499,77.095 C541.53499,74.97 542.04499,71.23 546.29499,68.68 L574.08999,52.615 C578.42499,50.15 584.88499,49.895 588.62499,52.02 L618.71499,69.36 C622.45499,71.485 621.94499,75.225 617.69499,77.775 L589.98499,93.755 C585.64999,96.305 579.10499,96.56 575.36499,94.435 Z'
                  id='Path'
                  fill='#D0BEFE'
                  fill-rule='nonzero'></path>
                <polyline
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='717.82499 117.81 706.77499 124.185 695.63999 117.81'></polyline>
                <polyline
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  opacity='0.4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='695.63999 117.81 706.68999 111.435 717.82499 117.81'></polyline>
                <polyline
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='717.82499 117.81 706.68999 103.785 695.63999 117.81'></polyline>
                <line
                  x1='706.68999'
                  y1='124.185'
                  x2='706.68999'
                  y2='103.785'
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'></line>
                <polyline
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='695.63999 117.81 706.77499 131.665 717.82499 117.81'></polyline>
                <line
                  x1='706.68999'
                  y1='126.82'
                  x2='706.77499'
                  y2='131.07'
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'></line>
                <line
                  x1='706.60499'
                  y1='94.945'
                  x2='706.60499'
                  y2='29.155'
                  id='Path'
                  stroke='url(#linearGradient-8a9ttb_9pp-1)'
                  stroke-width='3.05915'
                  stroke-linecap='round'></line>
                <polyline
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='135.31999 165.24 124.35499 171.615 113.21999 165.24'></polyline>
                <polyline
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  opacity='0.4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='113.21999 165.24 124.26999 158.865 135.31999 165.24'></polyline>
                <polyline
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='135.31999 165.24 124.18499 151.215 113.21999 165.24'></polyline>
                <line
                  x1='124.26999'
                  y1='171.7'
                  x2='124.18499'
                  y2='151.215'
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'></line>
                <polyline
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='113.21999 165.24 124.35499 179.095 135.31999 165.24'></polyline>
                <line
                  x1='124.26999'
                  y1='174.25'
                  x2='124.35499'
                  y2='178.5'
                  id='Path'
                  stroke='#ECE5FF'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'></line>
                <line
                  x1='124.18499'
                  y1='144.415'
                  x2='124.18499'
                  y2='70.125'
                  id='Path'
                  stroke='url(#linearGradient-8a9ttb_9pp-2)'
                  stroke-width='3.05915'
                  stroke-linecap='round'></line>
                <path
                  d='M496.48499,112.03 L496.48499,120.02 C496.48499,121.125 495.88999,122.145 494.95499,122.655 L418.62499,166.345 C416.24499,167.705 411.99499,167.535 409.27499,165.92 L349.09499,130.9 C347.64999,130.05 346.71499,128.52 346.71499,126.82 L346.71499,119.51'
                  id='Path'
                  fill='#C4CDD5'
                  fill-rule='nonzero'></path>
                <path
                  d='M494.52999,114.58 L419.47499,157.93 C417.09499,159.29 412.84499,159.12 410.12499,157.505 L350.19999,122.91 C347.39499,121.295 347.13999,118.915 349.51999,117.47 L424.57499,74.12 C426.95499,72.76 431.20499,72.93 433.92499,74.545 L493.84999,109.14 C496.65499,110.755 496.90999,113.135 494.52999,114.58 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M494.52999,114.58 L419.47499,157.93 C417.09499,159.29 412.84499,159.12 410.12499,157.505 L350.19999,122.91 C347.39499,121.295 347.13999,118.915 349.51999,117.47 L424.57499,74.12 C426.95499,72.76 431.20499,72.93 433.92499,74.545 L493.84999,109.14 C496.65499,110.755 496.90999,113.135 494.52999,114.58 Z'
                  id='Path'
                  fill='#F4F6F8'
                  fill-rule='nonzero'></path>
                <path
                  d='M346.71499,119.51 L346.71499,126.82 C346.71499,128.52 347.64999,130.05 349.09499,130.9 L358.01999,136.085 L357.93499,128.01 L346.71499,119.51 Z'
                  id='Path'
                  fill='#637381'
                  fill-rule='nonzero'></path>
                <path
                  d='M423.04499,74.3749 L348.66999,117.3 C346.03499,118.83 346.03499,121.21 348.66999,122.74 L358.01999,128.095 L441.74499,79.7299 L432.39499,74.3749 C429.75999,72.8449 425.59499,72.8449 423.04499,74.3749 Z'
                  id='Path'
                  fill='#919EAB'
                  fill-rule='nonzero'></path>
                <path
                  d='M360.83899,121.127 C362.34199,121.119 363.55499,120.389 363.55101,119.497 C363.54599,118.605 362.32399,117.889 360.82199,117.897 C359.31999,117.905 358.10599,118.635 358.11096,119.527 C358.11499,120.418 359.33699,121.135 360.83899,121.127 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M368.65999,116.622 C370.16199,116.614 371.37599,115.884 371.37102,114.992 C371.36599,114.1 370.14399,113.384 368.64199,113.392 C367.13999,113.4 365.92599,114.13 365.93096,115.022 C365.93599,115.913 367.15699,116.63 368.65999,116.622 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M436.55999,118.32 C437.32499,121.805 433.07499,125.035 427.03999,125.46 C421.00499,125.885 415.47999,123.42 414.62999,119.935 C414.20499,117.98 415.30999,116.025 417.77499,114.58 L407.57499,108.715 C397.71499,114.41 397.71499,123.675 407.65999,129.455 C417.60499,135.235 433.66999,135.235 443.52999,129.54 C449.05499,126.31 451.68999,121.805 450.66999,117.3 L436.55999,118.32 Z'
                  id='Path'
                  fill='#D0BEFE'
                  fill-rule='nonzero'></path>
                <path
                  d='M433.41499,114.58 C435.11499,115.6 436.21999,116.875 436.55999,118.32 L450.83999,117.3 C450.07499,114.07 447.52499,111.095 443.52999,108.8 L433.41499,114.58 Z'
                  id='Path'
                  fill='#4200FF'
                  fill-rule='nonzero'></path>
                <path
                  d='M407.57499,108.715 L417.77499,114.58 C422.10999,112.115 429.07999,112.115 433.41499,114.58 L443.52999,108.715 C433.58499,103.02 417.51999,103.02 407.57499,108.715 Z'
                  id='Path'
                  fill='#97DEBC'
                  fill-rule='nonzero'></path>
                <path
                  d='M304.63999,218.96 L290.01999,210.63 L282.79499,214.795 L281.43499,205.615 L250.32499,187.34 C247.26499,185.555 245.47999,182.75 245.05499,180.455 C244.54499,177.48 245.13999,170.51 245.13999,170.51 L334.72999,202.3 C334.72999,202.3 334.81499,209.27 334.81499,211.905 C334.81499,214.54 333.11499,217.175 329.62999,219.13 C322.82999,223.04 311.60999,223.04 304.63999,218.96 Z'
                  id='Path'
                  fill='#D0BEFE'
                  fill-rule='nonzero'></path>
                <path
                  d='M304.63999,218.96 L290.01999,210.63 L282.79499,214.795 L281.43499,205.615 L250.32499,187.34 C247.26499,185.555 245.56499,183.345 245.13999,181.05 C244.62999,178.075 245.13999,170.425 245.13999,170.425 L334.72999,202.215 C334.72999,202.215 334.81499,209.185 334.81499,211.82 C334.81499,214.455 333.11499,217.09 329.62999,219.045 C322.82999,223.04 311.60999,223.04 304.63999,218.96 Z'
                  id='Path'
                  fill='#C4CDD5'
                  fill-rule='nonzero'></path>
                <path
                  d='M304.63999,210.545 L290.01999,202.215 L282.79499,206.38 L281.43499,197.2 L250.32499,178.925 C243.35499,174.93 243.35499,168.385 250.23999,164.475 C257.12499,160.48 268.34499,160.48 275.31499,164.56 L329.62999,196.18 C336.59999,200.175 336.59999,206.72 329.71499,210.63 C322.82999,214.625 311.60999,214.625 304.63999,210.545 Z'
                  id='Path'
                  fill='#5CBC8E'
                  fill-rule='nonzero'></path>
                <polygon
                  id='Path'
                  fill='#919EAB'
                  fill-rule='nonzero'
                  points='290.01999 202.215 290.01999 210.63 282.79499 214.795 282.79499 206.38'></polygon>
                <path
                  d='M294.43999,184.365 L293.16499,186.235 L295.45999,187.765 C295.88499,188.105 295.45999,188.53 294.77999,188.53 L291.20999,188.36 L289.33999,190.06 C288.99999,190.4 288.06499,190.315 287.89499,189.89 L287.04499,187.935 L283.64499,187.425 C282.96499,187.34 282.79499,186.83 283.38999,186.575 L286.36499,185.47 L286.10999,183.43 C286.02499,183.005 286.87499,182.75 287.46999,183.005 L290.18999,184.365 L293.50499,183.6 C294.01499,183.6 294.69499,184.025 294.43999,184.365 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M306.16999,191.165 L304.89499,193.035 L307.18999,194.565 C307.61499,194.905 307.18999,195.33 306.50999,195.33 L302.93999,195.16 L301.06999,196.86 C300.72999,197.2 299.79499,197.115 299.62499,196.69 L298.77499,194.735 L295.37499,194.225 C294.69499,194.14 294.52499,193.63 295.11999,193.375 L298.09499,192.27 L297.83999,190.23 C297.75499,189.805 298.60499,189.55 299.19999,189.805 L301.91999,191.165 L305.23499,190.4 C305.82999,190.4 306.42499,190.825 306.16999,191.165 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M317.98499,197.965 L316.70999,199.835 L319.00499,201.365 C319.42999,201.705 319.00499,202.13 318.32499,202.13 L314.75499,201.96 L312.88499,203.66 C312.54499,204 311.60999,203.915 311.43999,203.49 L310.58999,201.535 L307.18999,201.025 C306.50999,200.94 306.33999,200.43 306.93499,200.175 L309.90999,199.07 L309.65499,197.03 C309.56999,196.605 310.41999,196.35 311.01499,196.605 L313.73499,197.965 L317.04999,197.2 C317.55999,197.2 318.23999,197.625 317.98499,197.965 Z'
                  id='Path'
                  fill='#1E8755'
                  fill-rule='nonzero'></path>
                <path
                  d='M282.62499,177.565 L281.34999,179.435 L283.64499,180.965 C284.06999,181.305 283.64499,181.73 282.96499,181.73 L279.39499,181.56 L277.52499,183.26 C277.18499,183.6 276.24999,183.515 276.07999,183.09 L275.22999,181.135 L271.82999,180.625 C271.14999,180.54 270.97999,180.03 271.57499,179.775 L274.54999,178.67 L274.29499,176.63 C274.20999,176.205 275.05999,175.95 275.65499,176.205 L278.37499,177.565 L281.68999,176.8 C282.19999,176.8 282.87999,177.225 282.62499,177.565 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M270.89499,170.765 L269.61999,172.635 L271.91499,174.165 C272.33999,174.505 271.91499,174.93 271.23499,174.93 L267.66499,174.76 L265.79499,176.46 C265.45499,176.8 264.51999,176.715 264.34999,176.29 L263.49999,174.335 L260.09999,173.825 C259.41999,173.74 259.24999,173.23 259.84499,172.975 L262.81999,171.87 L262.56499,169.83 C262.47999,169.405 263.32999,169.15 263.92499,169.405 L266.64499,170.765 L269.95999,170 C270.46999,170 271.14999,170.425 270.89499,170.765 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <polygon
                  id='Path'
                  fill='#CAF6E1'
                  fill-rule='nonzero'
                  points='637.83999 185.555 582.50499 217.43 553.34999 200.6 553.34999 183.77 637.83999 168.725'></polygon>
                <polygon
                  id='Path'
                  fill='url(#linearGradient-8a9ttb_9pp-3)'
                  fill-rule='nonzero'
                  opacity='0.6'
                  points='637.83999 185.555 582.50499 217.43 553.34999 200.6 553.34999 183.77 637.83999 168.725'></polygon>
                <polyline
                  id='Path'
                  stroke='#FFFFFF'
                  stroke-width='1.52957'
                  points='639.62499 172.975 582.50499 205.955 552.07499 188.445'></polyline>
                <polyline
                  id='Path'
                  stroke='#FFFFFF'
                  stroke-width='1.52957'
                  points='639.02999 179.435 582.50499 212.075 552.07499 194.565'></polyline>
                <polygon
                  id='Path'
                  fill='#5CBC8E'
                  fill-rule='nonzero'
                  points='637.83999 168.725 582.50499 200.6 553.34999 183.77 608.68499 151.895'></polygon>
                <path
                  d='M606.837098,176.308 C606.85599,172.74 601.84899,169.821 595.65199,169.787 C589.45499,169.754 584.41599,172.619 584.396882,176.186 C584.37799,179.754 589.38499,182.674 595.58199,182.707 C601.77799,182.741 606.81799,179.876 606.837098,176.308 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M617.679044,166.422 C617.68799,164.825 615.44999,163.519 612.67999,163.504 C609.90999,163.489 607.65799,164.771 607.648948,166.367 C607.64099,167.963 609.87899,169.269 612.64899,169.284 C615.41899,169.299 617.67099,168.018 617.679044,166.422 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M583.499032,186.127 C583.50699,184.531 581.26899,183.225 578.49899,183.21 C575.72999,183.195 573.47699,184.476 573.468936,186.072 C573.45999,187.668 575.69799,188.975 578.46799,188.99 C581.23799,189.005 583.48999,187.723 583.499032,186.127 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <polygon
                  id='Path'
                  fill='#454F5B'
                  fill-rule='nonzero'
                  points='613.52999 182.75 607.57999 186.15 578.50999 169.32 584.37499 165.92'></polygon>
                <polygon
                  id='Path'
                  fill='#637381'
                  fill-rule='nonzero'
                  points='607.57999 186.15 607.57999 202.98 613.52999 199.58 613.52999 182.75'></polygon>
                <polygon
                  id='Path'
                  fill='#C4CDD5'
                  fill-rule='nonzero'
                  points='292.22999 95.115 271.14999 107.355 271.14999 72.2501 292.22999 60.0951'></polygon>
                <polygon
                  id='Path'
                  fill='#DFE3E8'
                  fill-rule='nonzero'
                  points='271.14999 107.355 249.98499 95.115 249.98499 60.0951 271.14999 72.2501'></polygon>
                <polygon
                  id='Path'
                  fill='#637381'
                  fill-rule='nonzero'
                  points='271.06499 72.2501 249.98499 60.0101 270.97999 47.9401 292.05999 60.0951'></polygon>
                <polygon
                  id='Path'
                  fill='#C4CDD5'
                  fill-rule='nonzero'
                  points='259.75999 114.07 238.67999 126.225 238.67999 58.565 259.75999 46.41'></polygon>
                <polygon
                  id='Path'
                  fill='#DFE3E8'
                  fill-rule='nonzero'
                  points='238.67999 126.225 217.51499 114.07 217.51499 46.41 238.67999 58.565'></polygon>
                <polygon
                  id='Path'
                  fill='#410ECB'
                  fill-rule='nonzero'
                  points='238.59499 58.565 217.51499 46.325 238.50999 34.255 259.58999 46.41'></polygon>
                <polygon
                  id='Path'
                  fill='#C4CDD5'
                  fill-rule='nonzero'
                  points='227.88499 132.26 206.80499 144.5 206.80499 120.275 227.88499 108.035'></polygon>
                <polygon
                  id='Path'
                  fill='#DFE3E8'
                  fill-rule='nonzero'
                  points='206.80499 144.5 185.63999 132.26 185.63999 108.035 206.80499 120.275'></polygon>
                <polygon
                  id='Path'
                  fill='#919EAB'
                  fill-rule='nonzero'
                  points='206.71999 120.19 185.63999 108.035 206.63499 95.88 227.71499 108.12'></polygon>
                <line
                  x1='312.79999'
                  y1='178.84'
                  x2='368.72999'
                  y2='146.455'
                  id='Path'
                  stroke='url(#linearGradient-8a9ttb_9pp-4)'
                  stroke-width='3.8239'
                  stroke-linecap='round'></line>
                <line
                  x1='256.27499'
                  y1='123.505'
                  x2='321.97999'
                  y2='161.415'
                  id='Path'
                  stroke='url(#linearGradient-8a9ttb_9pp-5)'
                  stroke-width='3.8239'
                  stroke-linecap='round'></line>
                <line
                  x1='463.75999'
                  y1='147.73'
                  x2='546.97499'
                  y2='195.755'
                  id='Path'
                  stroke='url(#linearGradient-8a9ttb_9pp-6)'
                  stroke-width='3.8239'
                  stroke-linecap='round'></line>
                <path
                  d='M249.98499,67.235 L251.93999,62.3051 C252.19499,62.3051 252.44999,62.39 252.70499,62.56 C254.14999,63.41 254.14999,66.3001 252.70499,68.8501 C251.17499,71.4001 248.70999,72.845 247.26499,71.995 C245.81999,71.145 245.81999,68.2551 247.26499,65.7051 C248.02999,64.4301 248.96499,63.4101 250.06999,62.8151 L249.98499,67.235 Z'
                  id='Path'
                  fill='#FEFEFE'
                  fill-rule='nonzero'></path>
                <path
                  d='M282.36999,83.725 L286.19499,81.175 C286.27999,82.45 285.85499,83.895 285.08999,85.255 C283.55999,87.805 281.09499,89.25 279.64999,88.4 C278.20499,87.55 278.20499,84.66 279.64999,82.11 C280.41499,80.835 281.34999,79.815 282.45499,79.22 L282.36999,83.725 Z'
                  id='Path'
                  fill='#FEFEFE'
                  fill-rule='nonzero'></path>
                <path
                  d='M249.98499,113.9 C249.21999,114.325 248.62499,113.985 248.62499,113.135 C248.62499,112.285 249.21999,111.265 249.98499,110.84 C250.74999,110.415 251.34499,110.755 251.34499,111.605 C251.34499,112.455 250.74999,113.475 249.98499,113.9 Z M249.98499,103.19 C249.21999,103.615 248.62499,103.275 248.62499,102.425 C248.62499,101.575 249.21999,100.555 249.98499,100.13 C250.74999,99.705 251.34499,100.045 251.34499,100.895 C251.34499,101.745 250.74999,102.765 249.98499,103.19 Z M249.98499,92.565 C249.21999,92.99 248.62499,92.65 248.62499,91.8 C248.62499,90.95 249.21999,89.93 249.98499,89.505 C250.74999,89.08 251.34499,89.42 251.34499,90.27 C251.34499,91.12 250.74999,92.14 249.98499,92.565 Z M249.98499,81.94 C249.21999,82.365 248.62499,82.025 248.62499,81.175 C248.62499,80.325 249.21999,79.305 249.98499,78.88 C250.74999,78.455 251.34499,78.795 251.34499,79.645 C251.34499,80.495 250.74999,81.515 249.98499,81.94 Z'
                  id='Shape'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M218.19499,125.97 L220.65999,127.925 C219.12999,130.305 216.83499,131.495 215.38999,130.73 C213.94499,129.88 213.94499,126.99 215.38999,124.44 C216.15499,123.165 217.08999,122.145 218.19499,121.55 L218.19499,125.97 Z'
                  id='Path'
                  fill='#FEFEFE'
                  fill-rule='nonzero'></path>
                <path
                  d='M597.12499,73.27 L582.41999,81.77 C578.33999,84.15 572.04999,84.405 568.47999,82.365 L567.45999,81.77 C563.88999,79.73 564.31499,76.16 568.47999,73.78 L583.18499,65.28 C587.26499,62.9 593.55499,62.645 597.12499,64.685 L598.14499,65.28 C601.62999,67.32 601.20499,70.89 597.12499,73.27 Z'
                  id='Path'
                  fill='#FFFFFF'
                  fill-rule='nonzero'></path>
                <path
                  d='M580.910057,78.0358 C580.92099,76.1111 578.22699,74.5362 574.89399,74.5181 C571.56099,74.5 568.85099,76.0456 568.839934,77.9703 C568.82999,79.8951 571.52299,81.47 574.85599,81.488 C578.18899,81.5061 580.89999,79.9605 580.910057,78.0358 Z'
                  id='Path'
                  fill='#4200FF'
                  fill-rule='nonzero'></path>
                <line
                  x1='508.63999'
                  y1='162.69'
                  x2='578.50999'
                  y2='122.315'
                  id='Path'
                  stroke='url(#linearGradient-8a9ttb_9pp-7)'
                  stroke-width='3.8239'
                  stroke-linecap='round'></line>
                <polyline
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='509.91499 37.825 498.86499 44.2849 487.72999 37.825'></polyline>
                <polyline
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  opacity='0.3'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='487.72999 37.825 498.77999 31.45 509.91499 37.825'></polyline>
                <polyline
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='509.91499 37.825 498.77999 23.885 487.72999 37.825'></polyline>
                <line
                  x1='498.77999'
                  y1='44.285'
                  x2='498.77999'
                  y2='23.885'
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'></line>
                <polyline
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='487.72999 37.825 498.86499 51.765 509.91499 37.825'></polyline>
                <line
                  x1='498.77999'
                  y1='46.92'
                  x2='498.86499'
                  y2='51.17'
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'></line>
                <polyline
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='342.54999 93.84 331.49999 100.215 320.36499 93.84'></polyline>
                <polyline
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  opacity='0.3'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='320.36499 93.84 331.41499 87.465 342.54999 93.84'></polyline>
                <polyline
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='342.54999 93.84 331.41499 79.8149 320.36499 93.84'></polyline>
                <line
                  x1='331.49999'
                  y1='100.215'
                  x2='331.41499'
                  y2='79.8149'
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'></line>
                <polyline
                  id='Path'
                  stroke='#97DEBC'
                  stroke-width='1.52957'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  points='320.36499 93.84 331.49999 107.695 342.54999 93.84'></polyline>
                <line
                  x1='330.98999'
                  y1='157.25'
                  x2='330.22499'
                  y2='107.1'
                  id='Path'
                  stroke='url(#linearGradient-8a9ttb_9pp-8)'
                  stroke-width='3.8239'
                  stroke-linecap='round'></line>
                <path
                  d='M421.740057,216.07 C421.75099,214.145 419.05699,212.57 415.72399,212.552 C412.39099,212.534 409.68099,214.08 409.669934,216.004 C409.65999,217.929 412.35299,219.504 415.68599,219.522 C419.01899,219.54 421.72999,217.995 421.740057,216.07 Z'
                  id='Path'
                  fill='#637381'
                  fill-rule='nonzero'></path>
                <path
                  d='M213.653046,191.188 C213.66299,189.264 210.96899,187.689 207.63599,187.671 C204.30299,187.653 201.59299,189.198 201.582923,191.123 C201.57199,193.048 204.26599,194.623 207.59899,194.641 C210.93199,194.659 213.64199,193.113 213.653046,191.188 Z'
                  id='Path'
                  fill='#C4CDD5'
                  fill-rule='nonzero'></path>
                <path
                  d='M380.815046,47.5378 C380.82499,45.6131 378.13199,44.0382 374.79899,44.0201 C371.46599,44.002 368.75499,45.5477 368.744923,47.4724 C368.73399,49.3971 371.42799,50.972 374.76099,50.9901 C378.09399,51.0082 380.80399,49.4625 380.815046,47.5378 Z'
                  id='Path'
                  fill='#C4CDD5'
                  fill-rule='nonzero'></path>
                <path
                  d='M464.074057,191.609 C464.08499,189.684 461.39099,188.109 458.05799,188.091 C454.72499,188.073 452.01499,189.619 452.004923,191.543 C451.99399,193.468 454.68799,195.043 458.02099,195.061 C461.35399,195.079 464.06399,193.534 464.074057,191.609 Z'
                  id='Path'
                  fill='#C4CDD5'
                  fill-rule='nonzero'></path>
                <path
                  d='M671.127046,120.482 C671.13699,118.557 668.44299,116.982 665.10999,116.964 C661.77699,116.946 659.06699,118.492 659.056923,120.417 C659.04599,122.341 661.73999,123.916 665.07299,123.934 C668.40599,123.952 671.11599,122.407 671.127046,120.482 Z'
                  id='Path'
                  fill='#637381'
                  fill-rule='nonzero'></path>
                <line
                  x1='499.20499'
                  y1='93.67'
                  x2='498.43999'
                  y2='50.3199'
                  id='Path'
                  stroke='url(#linearGradient-8a9ttb_9pp-9)'
                  stroke-width='3.8239'
                  stroke-linecap='round'></line>
              </g>
            </g>
          </svg>{" "}
        </div>

        <div className='space-y-4 tracking-tighter text-center'>
          <p className='font-bold text-purple-500 uppercase'>
            A Unique Approach
          </p>

          <h2 className='text-2xl font-bold text-gray-600 lg:text-4xl'>
            Angelista is a data company first and VC fund second.
          </h2>

          <h3 className='text-xl text-gray-700 lg:text-2xl font-semi-bold'>
            We collect and analyze data and market intelligence to better vet
            investment opportunities.
          </h3>
        </div>
      </div>

      {/* <!-- value prop --> */}
      <div id='summaryValueProp' className='space-y-8 summary-value-prop'>
        {/* <!-- value prop items --> */}
        <div
          id='summaryCtas'
          className='grid grid-cols-1 gap-4 mx-auto lg:gap-12 max-w-7xl md:grid-cols-3 summary-ctas'>
          {/* <!-- ratings --> */}
          <div className='col-span-1 space-y-2 summary-ctas__item'>
            <figure className='w-28 h-28'>
              <Image
                src={icon2}
                width={200}
                height={200}
                alt='icon'
                className='w-3/5'
              />
            </figure>
            <h4 className='text-xl font-bold text-gray-600 lg:text-2xl'>
              Ratings
            </h4>
            <p className='text-sm lg:text-base'>
              In-depth proprietary benchmarks and measurements across key market
              and company indicators
            </p>
          </div>

          {/* <!-- analytics --> */}
          <div className='col-span-1 space-y-2 summary-ctas__item'>
            <figure className='w-28 h-28'>
              <Image
                src={icon1}
                width={200}
                height={200}
                alt='icon'
                className='w-3/5'
              />
            </figure>
            <h4 className='text-xl font-bold text-gray-600 lg:text-2xl'>
              Analytics
            </h4>
            <p className='text-sm lg:text-base'>
              More than 500 real-time data points on every available investment
              deal, including deal momentum indicators
            </p>
          </div>

          {/* <!-- research --> */}
          <div className='col-span-1 space-y-2 summary-ctas__item'>
            <figure className='w-32 h-28'>
              <Image
                src={icon3}
                width={200}
                height={200}
                alt='icon'
                className='w-3/5'
              />
            </figure>
            <h4 className='text-xl font-bold text-gray-600 lg:text-2xl'>
              Research
            </h4>
            <p className='text-sm lg:text-base'>
              Comprehensive research on highly rated companies conducted by our
              expert market analysts and partner VCs
            </p>
          </div>
        </div>
        {/* 
    <!-- value stats --> */}
        <div
          id='summaryStats'
          className='grid grid-cols-1 gap-16 px-12 py-8 mx-auto rounded-md max-w-7xl md:grid-cols-3 bg-slate-300'>
          <div className='col-span-1'>
            <h5 className='text-2xl font-bold text-gray-700'>3700+</h5>
            <p>Equity Raises Reviewed</p>
          </div>
          <div className='col-span-1 lg:text-center'>
            <h5 className='text-2xl font-bold text-gray-700'>7000+</h5>
            <p>Crowdfunding Raises</p>
          </div>
          <div className='col-span-1 lg:text-right'>
            <h5 className='text-2xl font-bold text-gray-700'>$2.3B+</h5>
            <p>Total Money Raised in Equity Raises</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSummary