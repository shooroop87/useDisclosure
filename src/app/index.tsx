import { useDisclosure } from "./hooks/useDisclosure";
import "./styles.css";

export const App = () => {
  // Используем наш кастомный хук без колбэков
  const { isOpen, toggle } = useDisclosure(false);

  return (
    <div className="page">
      <div className="card">
        <button onClick={toggle}>Открыть или закрыть блок с текстом</button>
      </div>

      {isOpen && (
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          asperiores atque delectus dolor doloremque, dolores doloribus ducimus
          ea eos est explicabo facilis magnam molestiae nisi officia optio
          praesentium quaerat quibusdam quos, sapiente tempore ut voluptatem
          voluptatum. Aliquid delectus deleniti dignissimos dolorem dolores
          dolorum ducimus, earum, esse eum excepturi expedita fuga illo illum
          incidunt ipsa libero maxime molestiae molestias nemo neque officiis
          omnis optio perferendis placeat quisquam quos repudiandae, tempore
          totam velit veniam. Accusamus illo libero quos saepe? Ad consequatur
          facere fugiat, harum nesciunt quae quos saepe sapiente sequi tempore.
          Est, laboriosam perspiciatis? Adipisci consequatur dolore doloribus
          fuga ipsam laboriosam quo?
        </p>
      )}
    </div>
  );
};