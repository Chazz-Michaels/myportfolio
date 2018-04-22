require 'test_helper'

class OnePageControllerTest < ActionDispatch::IntegrationTest
  test "should get one" do
    get one_page_one_url
    assert_response :success
  end

end
