<template>
  <div class="w-full h-screen p-6 bg-blue-700">
    <h1 id="title" class="mx-auto pt-6 mb-3 text-center text-4xl text-white">
      Anki Voice Cards
    </h1>
    <h2 class="p-2 text-center text-xl text-gray-400">
      Say the following word in Spanish
    </h2>

    <div class="flex pt-20 m-10 text-center justify-around">
      <div class="w-1/3 p-5 bg-indigo-500 rounded-lg shadow-lg">
        <p
          id="initial_word"
          data-cy="initial_word"
          class="text-white uppercase tracking-wider font-semibold"
        ></p>
      </div>
      <div class="w-1/3 p-5 bg-indigo-500 rounded-lg shadow-lg">
        <p
          id="answer"
          data-cy="answer"
          class="text-white uppercase tracking-wider font-semibold"
        ></p>
        <p
          id="interim"
          data-cy="interim"
          class="text-white opacity-50 uppercase tracking-wider font-semibold"
        ></p>
      </div>
    </div>

    <div class="flex justify-around">
      <div class="absolute m-5 lg:my-16 lg:mx-8 right-0 bottom-0">
        <a
          id="begin"
          data-cy="begin_button"
          class="p-3 lg:p-10 text-sm rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold cursor-pointer"
        >
          start
        </a>
      </div>
    </div>
  </div>
</template>
