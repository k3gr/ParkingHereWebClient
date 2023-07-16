import { ref } from 'vue'

export default function useParams() {
  const isLoading = ref(false)
  const isError = ref(false)

  return {
    isLoading,
    isError
  }
}
