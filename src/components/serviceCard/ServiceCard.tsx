function ServiceCard({title, icon, children}: any) {
  return (
    // fixed height so all cards are equal
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 min-h-64 h-full flex flex-col overflow-hidden">
      <div className="flex items-start space-x-4 flex-1 overflow-hidden">
        <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          {icon}
        </div>
        <div className="flex-1 overflow-auto pr-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
