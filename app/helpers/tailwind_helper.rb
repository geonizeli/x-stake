# frozen_string_literal: true
# rubocop:disable Layout/LineLength
module TailwindHelper
  class << self
    def input_classes
      "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    end

    def base_button_classes
      "cursor-pointer py-2 px-4"
    end

    def primary_button_classes
      "#{base_button_classes} bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    end
  end
end
