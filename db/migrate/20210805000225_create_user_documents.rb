# frozen_string_literal: true
class CreateUserDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table(:user_documents) do |t|
      t.string(:status, null: false)
      t.references(:user, null: false, foreign_key: true)

      t.timestamps
    end
  end
end
