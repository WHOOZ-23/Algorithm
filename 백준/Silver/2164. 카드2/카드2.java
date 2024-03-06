import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        Deque<Integer> queue = new ArrayDeque<>();
        StringBuilder sb = new StringBuilder();

        for(int i=1; i<=N; i++) {
            queue.offer(i);
        }

        while(1!=queue.size()) {
            queue.poll();
            queue.offerLast(queue.poll());
        }

        System.out.println(queue.peek());
    }
}