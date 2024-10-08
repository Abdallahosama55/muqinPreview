const ImageIcon = ({ width = 38, height = 38, title }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">{title && <title>{title}</title>}
      <path
        d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.9 13.98L11 16.51L14.1 12.52C14.3 12.26 14.7 12.26 14.9 12.53L18.41 17.21C18.4657 17.2843 18.4996 17.3726 18.508 17.4651C18.5163 17.5576 18.4987 17.6506 18.4572 17.7336C18.4157 17.8167 18.3519 17.8865 18.2729 17.9353C18.1939 17.9841 18.1029 18.01 18.01 18.01H6.02C5.6 18.01 5.37 17.53 5.63 17.2L8.12 14C8.31 13.74 8.69 13.73 8.9 13.98Z"
        fill="#5225CE"
      />
    </svg>
  );
};

export default ImageIcon;
