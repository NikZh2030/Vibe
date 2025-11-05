import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://puoafcbeteqeoucvxldn.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const lastName = e.target.lastName.value;
  const firstName = e.target.firstName.value;
  const email = e.target.email.value;

  const { data, error } = await supabase
    .from('users')
    .insert([{ lastName, firstName, email }]);

  if (error) {
    alert('Ошибка при сохранении данных');
  } else {
    alert('Данные успешно сохранены');
    e.target.reset();
  }
});
