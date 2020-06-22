const validate = (values) => {
  const errors = {};
  const {title} = values;
  if(!title){
    errors.title = 'Vui lòng nhập tiêu đề';
  } else if(title.trim() && title.length < 5) {
    errors.title = 'Tiêu đề phải từ 5 kí tự';
  }

  // if(!description){
  //   errors.description = 'Vui lòng nhập mô tả';
  // } else if(title.trim() && title.length < 5) {
  //   errors.description = 'Mô tả phải từ 5 kí tự';
  // }
  return errors;
}
export default validate;
