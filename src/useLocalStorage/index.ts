import { ref, watch } from 'vue';

/**
 * Returns an example ref.
 *
 * ### Example
 * ```js
 * import { useExample } from '@denver-vue/captain-hooks';
 *
 * const example = useExample();
 *
 * console.log(example.value); // example
 * ```
 *
 * @returns Ref<string>
 */
export const useLocalStorage = (key: string, value: any, localStorage: any): any => {
  const setItem = (value: any) => {
    localStorage.setItem(key, value);
  }

  if(!localStorage.getItem(key) && value) {
    setItem(value);
  }

  const valueRef = ref(localStorage.getItem(key) || value);

  watch(valueRef, (latestValue) => {
    setItem(latestValue);
  });

  return valueRef;
};
