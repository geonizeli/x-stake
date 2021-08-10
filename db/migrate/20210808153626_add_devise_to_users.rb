# frozen_string_literal: true

class AddDeviseToUsers < ActiveRecord::Migration[6.1]
  def self.up
    change_table(:users, bulk: true) do |t|
      ## Database authenticatable
      # t.string(:email,              null: false, default: "")
      t.string(:encrypted_password, null: false, default: "")

      ## Recoverable
      t.string(:reset_password_token)
      t.datetime(:reset_password_sent_at)

      ## Rememberable
      t.datetime(:remember_created_at)
    end

    change_column_default(:users, :email, "")

    # add_index(:users, :email,                unique: true)
    add_index(:users, :reset_password_token, unique: true)
  end

  def self.down
    change_column_default(:users, :email, nil)

    change_table(:users, bulk: true) do |t|
      t.remove(:encrypted_password)
      t.remove(:reset_password_token)
      t.remove(:reset_password_sent_at)
      t.remove(:remember_created_at)
    end

    remove_index(:users, :reset_password_token)
  end
end
