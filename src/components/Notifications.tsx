import React, { FC } from 'react'

interface NotificationsProps{
  state: "success" | "error" | "warning" | "info" | "neutral", 
  message: string;
}

const stateStyles = {
  success: {
    bg: "bg-(--notifications-success-20)",
    border: "border-(--notifications-success-100)",
    text: "text-(--notifications-success-100)",
    icon: <i className="icon-check_circle text-lg text-(--notifications-success-100)" />,
  },
  error: {
    bg: "bg-(--notifications-error-20)",
    border: "border-(--notifications-error-100)",
    text: "text-(--notifications-error-100)",
    icon: <i className="icon-warning text-lg text-(--notifications-error-100)" />,
  },
  warning: {
    bg: "bg-(--notifications-warning-20)",
    border: "border-(--notifications-warning-100)",
    text: "text-(--notifications-warning-100)",
    icon: <i className="icon-alert text-lg text-(--notifications-warning-100)" />,
  },
  info: {
    bg: "bg-(--notifications-info-40)",
    border: "border-(--notifications-info-110)",
    text: "text-(--notifications-info-110)",
    icon: <i className="icon-info text-lg text-(--notifications-info-110)" />,
  },
  neutral: {
    bg: "bg-(--gray-10)",
    border: "border-(--gray-60)",
    text: "text-(--gray-60)",
    icon: <i className="icon-info text-lg text-(--gray-60)" />,
  },
};

const Notifications: FC<NotificationsProps> = ({ state, message }) => {
  const { bg, border, text, icon } = stateStyles[state];

  return (
    <div className={`flex items-start gap-2 mt-2 pl-[10px] pr-4 py-4 rounded-lg border max-w-[540px] ${bg} ${border}`}>
      {icon}
      <p className={`text-xs font-medium m-0 ${text}`}>{message}</p>
    </div>
  );
};


export default Notifications