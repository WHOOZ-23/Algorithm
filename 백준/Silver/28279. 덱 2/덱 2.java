import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Deque<Integer> deque = new ArrayDeque<Integer>();
        StringBuilder sb = new StringBuilder();
        int N = sc.nextInt();

        for(int i=0; i<N; i++) {
            int M = sc.nextInt();

            switch(M) {
                case 1:
                    deque.addFirst(sc.nextInt());
                    break;
                case 2:
                    deque.addLast(sc.nextInt());
                    break;
                case 3:
                    if(deque.isEmpty()) {
                        sb.append(-1).append("\n");
                    } else {
                        sb.append(deque.pollFirst()).append("\n");
                    }
                    break;
                case 4:
                    if(deque.isEmpty()) {
                        sb.append(-1).append("\n");
                    } else {
                        sb.append(deque.pollLast()).append("\n");
                    }
                    break;
                case 5:
                    sb.append(deque.size()).append("\n");
                    break;
                case 6:
                    if(deque.isEmpty()) {
                        sb.append(1).append("\n");
                    } else {
                        sb.append(0).append("\n");
                    }
                    break;
                case 7:
                    if(deque.isEmpty()) {
                        sb.append(-1).append("\n");
                    } else {
                        sb.append(deque.peekFirst()).append("\n");
                    }
                    break;
                case 8:
                    if(deque.isEmpty()) {
                        sb.append(-1).append("\n");
                    } else {
                        sb.append(deque.peekLast()).append("\n");
                    }
                    break;
            }
        }

        System.out.println(sb);

        sc.close();
    }
}
